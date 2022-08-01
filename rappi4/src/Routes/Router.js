import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Default from '../Pages/Default/Default'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Signup/Signup'
import SignupAdress from '../Pages/SignupAdress/SignupAdress'
import Feed from '../Pages/Feed/Feed'
import Restaurants from '../Pages/Restaurants/Restaurants'
import OrderInProgress from '../Pages/OrderInProgress/OrderInProgress'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index exact path='/' element={ <Feed /> } />
                <Route path='/default' element={ <Default /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/cadastro' element={ <Signup /> } />
                <Route path='/cadastro/endereco' element={ <SignupAdress /> } />
                <Route path='/feed' element={ <Feed /> } />
                <Route path='/restaurantes' element={ <Restaurants /> } />
                <Route path='/pedidoEmAndamento' element={ <OrderInProgress /> } />
            </Routes>
        </BrowserRouter>
    )
}