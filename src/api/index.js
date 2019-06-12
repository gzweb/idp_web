import axios from '../utils/axios'


export default {
    getBanner(params){
        return axios.get('/banner',{ params })
    }
}