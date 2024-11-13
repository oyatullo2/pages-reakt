import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
        <h1>Home page</h1>
        <Link to={'./login.jsx'}>
        Login
        </Link>
        </>
    )
}