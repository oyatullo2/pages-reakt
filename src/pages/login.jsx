import { Link } from "react-router-dom"
import { useState } from "react"

export const Login = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [number, setNumber] = useState('');

   
    const inpValue = () => {
        setName('')
        setUsername('')
        setNumber('')
    }

    const inVal = (event) => {
        if(event.key === 'Enter'){
            inpValue()
        }
    }


    return (
        <>
        <div className="main">
        <input type="text" placeholder="Name" 
        value={name}
        onChange={(e)=> setName(e.target.value)}
        onKeyDown={inVal}
        />
        <input type="text" placeholder="Username" 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        onKeyDown={inVal}
        />
        <input type="number" placeholder="Phone Number"
        value={number}
        onChange={(e)=> setNumber(e.target.value)}
        onKeyDown={inVal}
         />
        <button onClick={inpValue}>Login</button>
        <Link to={'/'}>
        Home
        </Link>
        </div>
        </>
    )
}