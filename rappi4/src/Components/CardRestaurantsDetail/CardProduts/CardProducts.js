import React, {useContext} from 'react'
import { ContainerTexts } from '../CardHeaderDetail/CardHeaderDetailStyled'
import { ContainerCard, ContainerCategory, ContainerPriceButton, ContainerProducts, ImgProducts, TitleCategory, TitleProduct, DescriptonText, ValueProduct, ButtonAdd } from './CardProductsStyled'
import GlobalContext from '../../../Global/GlobalContext'

const CardProducts = ({ categories, restaurantDetail, restaurant}) => {
  const { cart, setCart } = useContext(GlobalContext)

  const addToCart = (product) => {
    const index = cart.findIndex((i)=> i.id === product.id)
    const newCart = [...cart]
    if (index === -1){
      const cartItem = {...product, quantity: 1}
      newCart.push(cartItem)
    } else {
      newCart[index].quantity += 1
    }
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
    localStorage.setItem("restaurant",JSON.stringify(restaurant))
}


  return (

    <div>
      {
        categories && categories.map((item, index) => {
          return (
            <ContainerCategory key={index}>
              <TitleCategory>
                <p>{item}</p>
              </TitleCategory>
              <ContainerCard>
                {
                  restaurantDetail && restaurantDetail.map((product) => {
                    if (item === product.category) {
                      return (
                        <ContainerProducts key={product.id}>
                          <ImgProducts src={product.photoUrl} alt="Foto do produto" />
                          <ContainerTexts>
                            <TitleProduct>{product.name}</TitleProduct>
                            <DescriptonText>{product.description}</DescriptonText>
                            <ContainerPriceButton>
                              <ValueProduct>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ValueProduct>
                              <ButtonAdd onClick={()=>{addToCart(product)}}>Adicionar</ButtonAdd>
                            </ContainerPriceButton>
                          </ContainerTexts>
                        </ContainerProducts>
                      )
                    }
                  })
                }

              </ContainerCard>
            </ContainerCategory>
          )
        })

      }


    </div>
  )
}

export default CardProducts

