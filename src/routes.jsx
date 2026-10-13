import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/home.jsx';
import './pages/home/home.scss';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/pages/cadastro/index.jsx' element = {<Cadastro/>} />
                <Route path = '/pages/login/index.jsx' element = {<Login/>} />
                <Route path = '/' element = {<Home/>} />
                <Route path = '/pages/user/index.jsx' element = {<User/>} />
                <Route path = '/pages/hemocentro/index.jsx' element = {<Hemocentro/>} />
                <Route path = '/pages/grupos/index.jsx' element = {<Grupos/>} />
                <Route path = '/pages/historico/index.jsx' element = {<Historico/>} />
            </Routes>
        </BrowserRouter>
    )
}