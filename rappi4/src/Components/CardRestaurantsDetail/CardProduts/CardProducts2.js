import React, { useState, useContext, useEffect } from 'react'
import { Button } from '@mui/material'
import { ContainerButton, ContainerProducts, ImgProducts, TitleProduct, DescriptonText, ValueProduct, Quantity, ContainerTexts } from './CardProductsStyled'
import GlobalContext from '../../../Global/GlobalContext'
const CardProducts2 = ({ key, product, setNewProduct, addToCart }) => {
    const { cart, setCart, removeCart } = useContext(GlobalContext)
    const [checkCart, setCheckCart] = useState([])

    useEffect(() => {
        const check = cart && cart?.filter((item) => item.id === product.id)
        setCheckCart(check)
    }, [cart])


    const removeItem = (itemID) => {
        const newProducts = cart
            .map((item) => {
                if (item.id === itemID) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    }

                }
                return item;
            })
            .filter((item) => item.quantity > 0)
        setCart(newProducts)
        localStorage.setItem("cart", JSON.stringify(newProducts))
    }

    return (
        <ContainerProducts key={product.name}>
            <ImgProducts src={product.photoUrl} alt="Foto do produto" />
            <ContainerTexts>
                <TitleProduct>{product.name}</TitleProduct>
                <DescriptonText>{product.description}</DescriptonText>
                <ValueProduct>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ValueProduct>
            </ContainerTexts>
            <ContainerButton checkCart={checkCart && checkCart?.length}>
                {
                    cart && cart?.map((quant) => {
                        if (quant.id === product.id) {
                            return (
                                <div>
                                    <Quantity>{quant.quantity}</Quantity>
                                </div>
                            )
                        } else {
                            <div></div>
                        }
                    })

                }
                {checkCart && checkCart?.length > 0 ?
                    <Button onClick={() => removeItem(product.id)}>Remover</Button>
                    :
                    <Button onClick={() => addToCart(product)}>Adicionar</Button>
                }
            </ContainerButton>
        </ContainerProducts>
    )
}

export default CardProducts2