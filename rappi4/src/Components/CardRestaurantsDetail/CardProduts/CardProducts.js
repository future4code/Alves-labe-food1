import React, { useContext, useEffect, useState } from 'react'
import { ContainerCard, ContainerCategory, TitleCategory, Style, MappedDiv } from './CardProductsStyled'
import GlobalContext from '../../../Global/GlobalContext'
import { Box, FormControl, MenuItem, Modal, Select, Typography, Button } from '@mui/material';
import CardProducts2 from './CardProducts2'
import { toast } from 'react-toastify'

const CardProducts = ({ categories, restaurantDetail, restaurant }) => {
  const { cart, setCart } = useContext(GlobalContext)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [quantity, setQuantity] = useState(1)
  const [newProduct, setNewProduct] = useState([])

  const addToCart = (product) => {
    setNewProduct(product)
    handleOpen()
  }

  const addToCartModal = () => {
    const index = cart && cart?.findIndex((i) => i.id === newProduct.id)
    const newCart = [...cart]
    if (index === -1) {
      const cartItem = { ...newProduct, quantity: quantity }
      newCart.push(cartItem)
      toast.success('Produto adicionado ao carrinho')
      handleClose()
    } else {
      newCart[index].quantity += quantity
      toast.success('Produto adicionado ao carrinho')
      handleClose()
    }
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
    localStorage.setItem("restaurant", JSON.stringify(restaurant))
  }

  const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

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

                      return (<MappedDiv>
                        <CardProducts2
                          key={product.id}
                          product={product}
                          setNewProduct={setNewProduct}
                          addToCart={addToCart}
                        />
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                          onBackdropClick={handleClose}
                          BackdropProps={{style: {backgroundColor: 'rgba(0, 0, 0, 0.06)'}}}
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
                                  quantityOptions?.map((option) => {
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
                      </MappedDiv>
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

