// Página de rotas para ligar as páginas
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastro from './pages/cadastro/index.jsx';
import './pages/cadastro/index.scss';

import Login from './pages/login/index.jsx';
import './pages/login/index.scss';

import Home from './pages/home/home.jsx';
import './pages/home/home.scss';

import User from './pages/user/index.jsx';
import './pages/user/index.scss';

import Hemocentro from './pages/hemocentro/index.jsx';
import './pages/hemocentro/index.scss';

import Grupos from './pages/grupos/index.jsx';
import './pages/grupos/index.scss';

import Historico from './pages/historico/index.jsx'
import './pages/historico/index.scss'

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