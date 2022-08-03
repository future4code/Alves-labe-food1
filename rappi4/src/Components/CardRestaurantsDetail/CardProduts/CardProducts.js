import React, {useContext} from 'react'
import { ContainerTexts } from '../CardHeaderDetail/CardHeaderDetailStyled'
import { ContainerCard, ContainerCategory, ContainerPriceButton, ContainerProducts, ImgProducts, TitleCategory, TitleProduct, DescriptonText, ValueProduct, ButtonAdd } from './CardProductsStyled'
import GlobalContext from '../../../Global/GlobalContext'

const CardProducts = ({ categories, restaurantDetail }) => {
  const { addToCart } = useContext(GlobalContext)

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
                        <ContainerProducts>
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

