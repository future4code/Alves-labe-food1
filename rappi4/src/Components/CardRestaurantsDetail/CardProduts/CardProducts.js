import React, { useContext, useState, useEffect } from 'react'
import { ContainerTexts } from '../CardHeaderDetail/CardHeaderDetailStyled'
import { ContainerCard, ContainerCategory, ContainerButton, ContainerProducts, ImgProducts, TitleCategory, TitleProduct, DescriptonText, ValueProduct, ButtonAdd, Style, ContainerButtons, Quantity } from './CardProductsStyled'
import GlobalContext from '../../../Global/GlobalContext'
import { Alert, Box, FormControl, MenuItem, Modal, Select, Snackbar, Typography, Button } from '@mui/material';

const CardProducts = ({ categories, restaurantDetail, restaurant }) => {
  const { cart, setCart } = useContext(GlobalContext)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [quantity, setQuantity] = useState(1)
  const [newProduct, setNewProduct] = useState([])
  const [checkCart, setCheckCart] = useState()
  const [productsId, setProductsId] = useState([])
  const arrayVazio = []

  useEffect(() => {
    const check = cart.filter((item) => item.id === newProduct.id)
    arrayVazio.push(check)
    
    setCheckCart(arrayVazio)
    console.log("array vazio",arrayVazio)
  }, [cart])
  console.log(checkCart)

  const addToCart = (product) => {
    // console.log(product)
    setNewProduct(product)
    handleOpen()
  }

  const addToCartModal = () => {
    const index = cart.findIndex((i) => i.id === newProduct.id)
    const newCart = [...cart]
    if (index === -1) {
      const cartItem = { ...newProduct, quantity: quantity }
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

  const teste =(product, productId) => {
    if (checkCart.length === 0 )
    return(
      <Button onClick={() => { addToCart(product) }}>adicionar</Button>
    ) 
     if (checkCart.length > 0) {

      const teste2 = checkCart.map((quant) => {
                            
        if (quant.id === productId) {
          return (
            <ContainerButton>
              {quant.quantity > 0 ?
              <div>

                <Quantity>{quant.quantity}</Quantity>
                  <Button>remover</Button>
              </div>
                :
                <Button onClick={() => { addToCart(product) }}>adicionar</Button>
              }
            </ContainerButton>
          )
        } else {
          return (<Button onClick={() => { addToCart(product) }}>adicionar</Button>)
        }

      })

      return teste2
    }

  }

  
console.log("carrinho",cart)
  console.log("checkCart",checkCart)
  console.log("productsId", productsId)

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
                            <ValueProduct>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ValueProduct>
                          </ContainerTexts>
                          
                          <ContainerButton>
                            {teste(product, product.id, )}
                          </ContainerButton>
                         
                          {/* {<Button>Adicionar</Button> <Button>Excluir</Button>} */}


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

