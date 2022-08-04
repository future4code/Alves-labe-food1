import React, { useContext, useState } from 'react'
import { ContainerTexts } from '../CardHeaderDetail/CardHeaderDetailStyled'
import { ContainerCard, ContainerCategory, ContainerPriceButton, ContainerProducts, ImgProducts, TitleCategory, TitleProduct, DescriptonText, ValueProduct, ButtonAdd, Style, ContainerButtons } from './CardProductsStyled'
import GlobalContext from '../../../Global/GlobalContext'
import { Alert, Box, Button, FormControl, MenuItem, Modal, Select, Snackbar, Typography } from '@mui/material';

const CardProducts = ({ categories, restaurantDetail, restaurant }) => {
  const { cart, setCart } = useContext(GlobalContext)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [quantity, setQuantity] = useState(1)
  const [newProduct, setNewProduct] = useState()

  const addToCart = (product) => {
    console.log(product)
    setNewProduct(product)
    handleOpen()
  }

  const addToCartModal = () => {
    const index = cart.findIndex((i) => i.id === newProduct.id)
    const newCart = [...cart]
    if (index === -1) {
      const cartItem = { ...newProduct, quantity: quantity}
      newCart.push(cartItem)
    } else {
      newCart[index].quantity += quantity
    }
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
    localStorage.setItem("restaurant", JSON.stringify(restaurant))
  }
  

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '216px',
    bgcolor: '#fff',
    boxShadow: 24,
    p: '31px 16px 21px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '28px'
  };

  const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  console.log(quantity)

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
                      return (<div>
                        <ContainerProducts key={product.id}>
                          <ImgProducts src={product.photoUrl} alt="Foto do produto" />
                          <ContainerTexts>
                            <TitleProduct>{product.name}</TitleProduct>
                            <DescriptonText>{product.description}</DescriptonText>
                            <ContainerPriceButton>
                              <ValueProduct>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ValueProduct>
                              <ButtonAdd onClick={() => { addToCart(product) }}>Adicionar</ButtonAdd>
                            </ContainerPriceButton>
                          </ContainerTexts>
                        </ContainerProducts>
                        <Modal
                          open={open} 
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={Style}>
                            <Typography variant="h6" component="h2" sx={{ fontSize: '16px', letterSpacing: '-0.39px', textAlign: 'center' }}>
                              Selecione a quantidade desejada
                            </Typography>
                            <FormControl sx={{ width: '100%' }}>
                              <Select
                                value={quantity}
                                onChange={handleChange}
                              >
                                {
                                  quantityOptions.map((option) => {
                                    return <MenuItem key={option} value={option}>{option}</MenuItem>
                                  })
                                }

                              </Select>
                            </FormControl>
                            <Button
                              sx={{ fontSize: '16px', letterSpacing: '-0.39px', alignSelf: 'flex-end', width: '200px', p: '1px' }}
                              onClick={() => { addToCartModal() }}
                            >
                              Adicionar ao carrinho
                            </Button>
                          </Box>
                        </Modal>
                      </div>
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

