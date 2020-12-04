import axios from '../axios'

// eslint-disable-next-line import/prefer-default-export
export const getRestaurant = () => axios.get(`/restaurants.json?auth=${localStorage.getItem('token')}&username=${localStorage.getItem('username')}`)
