import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../Routes/Coordinator'
import Back from '../../Assets/back.svg'
import { ContainerHeader, Titles, BackImg, DivImagine, Line } from './HeaderStyled'

const Header = () => {
    const navigate = useNavigate()

    const buttonHeader = () => {
        if (window.location.pathname === "/cadastro") {
            return (
                <ContainerHeader>
                    <BackImg src={Back} alt="ícone back" onClick={() => goBack(navigate)} />
                    <div></div>
                    <DivImagine></DivImagine>
                </ContainerHeader>
            )
        } else if (window.location.pathname === "/cadastro/endereco") {
            return (
                <ContainerHeader>
                    <BackImg src={Back} alt="ícone back" onClick={() => goBack(navigate)} />
                    <div></div>
                    <DivImagine></DivImagine>
                </ContainerHeader>
            )
        } else if (window.location.pathname === "/feed" || window.location.pathname === "/") {
            return (
                <ContainerHeader>
                    <div></div>
                    <Titles>Rappi4</Titles>
                    <div></div>
                </ContainerHeader>
            )
        } else if (window.location.pathname === "/carrinho") {
            return (
                <ContainerHeader>
                    <div></div>
                    <Titles>Meu Carrinho</Titles>
                    <div></div>
                </ContainerHeader>
            )
        } else if (window.location.pathname === "/busca") {
            return (
                <ContainerHeader>
                    <BackImg src={Back} alt="ícone back" onClick={() => goBack(navigate)} />
                    <Titles>Busca</Titles>
                    <DivImagine></DivImagine>
                </ContainerHeader>
            )
        } else if (window.location.pathname.includes(`/restaurantes`)) {
            return (
                <ContainerHeader>
                    <BackImg src={Back} alt="ícone back" onClick={() => goBack(navigate)} />
                    <Titles>Restaurante</Titles>
                    <DivImagine></DivImagine>
                </ContainerHeader>
            )
        } else if (window.location.pathname === "/perfil") {
            return (
                <ContainerHeader>
                    <div></div>
                    <Titles>Meu Perfil</Titles>
                    <div></div>
                </ContainerHeader>
            )
        } else if (window.location.pathname === "/editarPerfil") {
            return (
                <ContainerHeader>
                    <BackImg src={Back} alt="ícone back" onClick={() => goBack(navigate)} />
                    <Titles>Editar</Titles>
                    <DivImagine></DivImagine>
                </ContainerHeader>
            )
        } else if (window.location.pathname === "/editarEndereco") {
            return (
                <ContainerHeader>
                    <BackImg src={Back} alt="ícone back" onClick={() => goBack(navigate)} />
                    <Titles>Endereço</Titles>
                    <DivImagine></DivImagine>
                </ContainerHeader>
            )
        } else {
            return (
                <>

                </>
            )
        }
    }
    return (
        <>
            {buttonHeader()}
        </>
    )
}

export default Header