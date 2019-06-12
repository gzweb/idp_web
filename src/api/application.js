import axios from '../utils/axios'

export function getApplicationInfo(params){
    return axios.get(`/sector/${params}`)
}
export function postApplication(type,params){
    return axios.post(`/application/${type}`,params)
}
export function upLoadImg(params){
    return axios.post('/application/medical-proof',params)
}
