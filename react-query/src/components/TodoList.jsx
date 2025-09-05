import { useQuery } from "@tanstack/react-query";
import axios from 'axios'

// this funtion will fetch our data from the api
const fetchTodos = async ()=>{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    return data
}

function TododList(){
    // use the usequery hook to fetch data
    const { data, isLoading, isError , error} = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos,
    })
    
//handling the loading state
if (isLoading){
    return <div className="loading">Loading...</div>
}

// handling the error
if(isError){
    return <div className="error">Error : {error.message}</div>
}

// if data is available render it
return(
    <ul className="todo-list">
        {data.map((todo)=>(
            <li
            key={todo.id}
            className={todo.completed ? 'completed' : ''}>
                {todo.title}
            </li>
        ))}
    </ul>
)
}


export default TododList;