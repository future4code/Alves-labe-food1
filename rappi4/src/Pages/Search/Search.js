import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../../Global/GlobalContext'
import useVerifyAdress from '../../Hooks/useVerifyAdress'
import { goToRestaurants } from '../../Routes/Coordinator'
import { MainContainer, SearchBar } from './Styled'
import { ContainerCards, Logo, DivName, Divs, POne, PTwo } from '../../Components/CardFeed/CardFeedStyled'

export default function Search() {
    const { restaurants } = useContext(GlobalContext)
    const [searchInput, setSearchInput] = useState('')
    const navigate = useNavigate()
    useVerifyAdress()

    const onChangeSearch = (event) => {
        setSearchInput(event.target.value)
    }


    const showRestaurants = restaurants.filter((restaurant) => {
        return restaurant.name
            .toLowerCase()
            .includes(searchInput.toLowerCase())
    })
        .map((restaurant) => {
            return (
                <ContainerCards onClick={() => goToRestaurants(navigate, restaurant.id)}>
                    <Logo>
                        <img src={restaurant.logoUrl} />
                    </Logo>
                    <DivName>
                        <p>{restaurant.name}</p>
                    </DivName>
                    <Divs>
                        <POne>{restaurant.deliveryTime}min </POne>
                        <PTwo>Frete {restaurant.shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </PTwo>
                    </Divs>
                </ContainerCards>
            )
        })

    const renderPage = () => {
        if (searchInput === '') {
            return <p>Busque por nome do restaurante</p>
        } else if (showRestaurants.length >= 1) {
            return <>
                {showRestaurants}
            </>
        } else {
            return <p>Não encontramos :(</p>
        }
    }

    return (
        <MainContainer>
            <SearchBar value={searchInput} onChange={onChangeSearch}></SearchBar>
            {renderPage()}
        </MainContainer>
    )
}

