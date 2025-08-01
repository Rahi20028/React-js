import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [character, setcharacter] = useState(true)
  const [Password, setpassword] = useState("")

  // ref hook

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (character) str += "!#$%&*{}+_[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)

  }, [length, number, character, setpassword])

  const copypassword = useCallback(() => {
    passwordRef.current?.select();

    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() => {
    passwordGenerator()
  }
    , [length, number, character, passwordGenerator])



  return (
    <>
      <div className="w-full max-w-md mx-auto my-12 px-6 py-6 bg-gray-900 text-orange-400 rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-white mb-6">Password Generator</h1>

        {/* Output section */}
        <div className="flex gap-2 items-center bg-white rounded-lg px-3 py-2 shadow-inner mb-6">
          <input
            type="text"
            value={Password}
            className="flex-1 py-2 px-4 text-gray-800 rounded-md outline-none"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copypassword}
            className="px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition duration-200"
          >
            Copy
          </button>
        </div>

        {/* Controls section */}
        <div className="space-y-4">
          {/* Length Range */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-white">Length: <span className="font-semibold">{length}</span></label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer accent-orange-500"
              onChange={(e) => setlength(e.target.value)}
            />
          </div>

          {/* Include Numbers */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              className="accent-orange-500"
              onChange={() => setnumber((prev) => !prev)}
            />
            <label htmlFor="numberInput" className="text-white">Include Numbers</label>
          </div>

          {/* Include Characters */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={character}
              id="charInput"
              className="accent-orange-500"
              onChange={() => setcharacter((prev) => !prev)}
            />
            <label htmlFor="charInput" className="text-white">Include Special Characters</label>
          </div>
        </div>
      </div>



    </>
  )
}

export default App
