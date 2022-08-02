import React, {useState, useEffect, useContext} from 'react'
import {useProtectedPage} from '../../Hooks/useProtectedPage'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import GlobalContext from '../../Global/GlobalContext'
import { BASE_URL } from '../../Constants/urls'
import CardRestaurantsDetail from '../../Components/CardRestaurantsDetail/CardRestaurantsDetail'
import CardHeaderDetail from '../../Components/CardRestaurantsDetail/CardHeaderDetail/CardHeaderDetail' 
export default function Restaurants() {
  
  const params = useParams()
  
  const [restaurantDetail, setRestauranteDetail] = useState([])
  const [restaurant, setRestaurant] = useState([])
  useProtectedPage()


  const token = localStorage.getItem('token')
  
  useEffect(() => {
    axios.get(`${BASE_URL}/restaurants/${params.id}`, {
      headers: {
      auth: token
    }
    })
    .then((res) => {
      setRestaurant(res.data.restaurant)
      setRestauranteDetail(res.data.restaurant.products)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])
  
  
  
  const showHeaderRestaurant =  restaurantDetail && restaurantDetail?.map((rest) => {
      return (
      <CardRestaurantsDetail key={rest.id} rest={rest} />
      )
         
  })
  
  return (
    <div>
    <CardHeaderDetail rest = {restaurant} />
     {/* {showHeaderRestaurant} */}
    </div>
  )
}
