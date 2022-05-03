import axios from "axios"

export default axios.create({
    baseURL:"https://b12-farmeasy.herokuapp.com",
    headers: { "Content-Type": "multipart/form-data" },
})