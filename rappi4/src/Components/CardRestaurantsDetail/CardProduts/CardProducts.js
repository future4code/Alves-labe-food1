import React from 'react'
import { ContainerTexts } from '../CardHeaderDetail/CardHeaderDetailStyled'
import { ContainerCard, ContainerCategory, ContainerPriceButton, ContainerProducts, ImgProducts, TitleCategory, TitleProduct, DescriptonText, ValueProduct, ButtonAdd } from './CardProductsStyled'

const CardProducts = ({ categories, restaurantDetail }) => {


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
                              <ValueProduct>R$ {product.price},00</ValueProduct>
                              <ButtonAdd>Adicionar</ButtonAdd>
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

