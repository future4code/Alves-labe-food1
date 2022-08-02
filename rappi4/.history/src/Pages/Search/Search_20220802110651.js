import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import useVerifyAdress from '../../Hooks/useVerifyAdress'

export default function Search() {
    const {restaurants} = useContext(GlobalContext)
    const [searchInput, setSearchInput] = useState('')
    const navigate = useNavigate()
    useVerifyAdress()
  
    const onChangeSearch = (event) => {
      setSearchInput(event.target.value)
    }
    
  
    const showRestaurants = restaurants.filter((restaurant) => {
      return restaurant.name 
      .toLowerCase()
      .includes(searchInput.toLowerCase()) || restaurant.description
      .toLowerCase()
      .includes(searchInput.toLowerCase()) || restaurant.category
      .toLowerCase()
      .includes(searchInput.toLowerCase())
    })
    .map((restaurant) => {
      return (
        <div>
          <p>{restaurant.name}</p>
          <button onClick={()=> goToRestaurants(navigate, restaurant.id)}>Detalhes</button>
        </div>
      )
    })
  
    const categorias = restaurants.map((restaurant) => {    return restaurant.category})
    let filteredCategories = [...new Set(categorias)]
  
  const mappedCategories = filteredCategories.map((category) => {
    return <p onClick={()=>setCategory(category)}>{category}</p>
  })
  
  
    return (
  <MainContainer>
  <input value={searchInput} onChange={onChangeSearch}></input>
  <DivCategory>{mappedCategories}</DivCategory>
  {showRestaurants}
  </MainContainer>
    )
  }

