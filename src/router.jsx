import {Route, Routes} from 'react-router-dom'
import { Home } from './pages/home'
import { Login } from './pages/login'

export function Router(){
    return(
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/login.jsx' Component={Login}/>
        </Routes>
    )
}