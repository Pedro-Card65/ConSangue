// Página de rotas para ligar as páginas
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastro from './pages/cadastro/index.jsx';

import Login from './pages/login/index.jsx';

import Home from './pages/home/home.jsx';

import User from './pages/user/index.jsx';

import Hemocentro from './pages/hemocentro/index.jsx';

import Grupos from './pages/grupos/index.jsx';

import Historico from './pages/historico/index.jsx';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Login/>} />;
                <Route path = '/pages/cadastro/index.jsx' element = {<Cadastro/>} />;
                <Route path = '/pages/home/index.jsx' element = {<Home/>} />;
                <Route path = '/pages/user/index.jsx' element = {<User/>} />;
                <Route path = '/pages/hemocentro/index.jsx' element = {<Hemocentro/>} />;
                <Route path = '/pages/grupos/index.jsx' element = {<Grupos/>} />;
                <Route path = '/pages/historico/index.jsx' element = {<Historico/>} />;
            </Routes>
        </BrowserRouter>
    )
}