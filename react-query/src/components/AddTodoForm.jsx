import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// The mutation function remains the same
const addTodo = (newTodo) => {
  return axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
};

function AddTodoForm() {
  const [title, setTitle] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addTodo,
    
    // --- THIS IS THE NEW, OPTIMISTIC UPDATE LOGIC ---

    // 1. onMutate is called before the mutation function is fired
    onMutate: async (newTodo) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData(['todos']);

      // Optimistically update to the new value
      queryClient.setQueryData(['todos'], (old) => [...(old || []), { ...newTodo, id: Date.now() }]);

      // Return a context object with the snapshotted value
      return { previousTodos };
    },

    // 2. If the mutation fails, use the context returned from onMutate to roll back
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(['todos'], context.previousTodos);
    },

    // 3. Always refetch after error or success, to ensure server state is correct
    // --- FIX ---
    // For a fake API like JSONPlaceholder, the refetch on success will overwrite
    // our optimistic update because the new todo is never actually saved on the server.
    // We'll comment this out for the demo so our optimistic update persists.
    // With a real API, you would want to keep this to ensure your client
    // state is in sync with your server state.
    /*
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
    */
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      mutation.mutate({ title, userId: 1, completed: false });
      setTitle('');
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
        disabled={mutation.isPending}
      />
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Adding...' : 'Add Todo'}
      </button>
      {mutation.isError && <div className="error">An error occurred: {mutation.error.message}</div>}
    </form>
  );
}

export default AddTodoForm;

