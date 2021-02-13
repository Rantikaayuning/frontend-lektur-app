import Axios from 'axios'

const API = Axios.create({
	baseURL: `https://lekturapp.herokuapp.com`,
})

export default API
