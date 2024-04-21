import axios from "axios";

axios.defaults.baseURL='https://fakestoreapi.com/auth/';
axios.defaults.headers.common['Authorization']='Bearer' + localStorage.getItem('token')