import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Default from '../Pages/Default/Default'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Signup/Signup'
import SignupAdress from '../Pages/SignupAdress/SignupAdress'
import Feed from '../Pages/Feed/Feed'
import Restaurants from '../Pages/Restaurants/Restaurants'
import Search from '../Pages/Search/Search'
import Cart from '../Pages/Cart/Cart'
import Header from '../Components/Header/Header'
import MyProfile from '../Pages/MyProfile/MyProfile'
import EditProfile from '../Pages/editProfile/EditProfile'
import EditAddress from '../Pages/EditAddress/EditAddress'

export default function Router() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route index exact path='/' element={ <Feed /> } />
                <Route path='/default' element={ <Default /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/cadastro' element={ <Signup /> } />
                <Route path='/cadastro/endereco' element={ <SignupAdress /> } />
                <Route path='/feed' element={ <Feed /> } />
                <Route path='/restaurantes/:id' element={ <Restaurants /> } />
                <Route path='/busca' element={ <Search /> } />
                <Route path='/carrinho' element={ <Cart /> } />
                <Route path='/perfil' element={ <MyProfile /> } />
                <Route path='/editarPerfil' element={ <EditProfile /> } />
                <Route path='/editarEndereco' element={ <EditAddress /> } />
            </Routes>
        </BrowserRouter>
    )
}