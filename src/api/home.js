import axios from '../utils/axios'


export function getApplicationList(params){
    return axios.get('/application',{ params })
}
export function getApplicationCtx(params){
    return axios.get(`/application/${params}`)
}
export function getUserInfo(){
    return axios.get(`/profile`)
}
export function getFQA(){
    return axios.get(`/qa`)
}
export function getPayInfo(params){
    return axios.get(`/application/${params}/pay`)
}