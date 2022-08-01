import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../Routes/Coordinator'

const Header = () => {
    const navigate = useNavigate()

    const buttonHeader = () => {
        if (window.location.pathname === "/cadastro") {
            return (
                <>
                <p onClick={() => goBack(navigate)}> Voltar </p>                    
                </>
            )
        } else if (window.location.pathname === "/cadastro/endereco") {
            return (
                <>
                <p onClick={() => goBack(navigate)}> Voltar </p>                    
                </>
            )
        } else if (window.location.pathname === "/feed") {
            return (
                <>
                <p> Rappi4 </p>                    
                </>
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