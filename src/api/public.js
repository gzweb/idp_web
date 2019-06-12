import axios from '../utils/axios'

// https://gitee.com/cee_git/api/blob/master/idp.md 文档

// https://org.modao.cc/app/244d610c08b151aefb1e681ef2ac5c40c18b9f6d#screen=s9eaf0664149902550477b2 原型图

export function login(params) {
    return axios.post('/account/login', params)
}

export function emailLogin(params) {
    return axios.post('/account/mfa', params)
}

export function signUp(params) {
    return axios.post('/account/register', params)
}
export function getValidationImg(params) {
    return axios.get('/captcha', { params })
}
// export function isMfa(params) {
//     return axios.get('/mfa', { params })
// }
// export function getMfaCode(params) {
//     return axios.get('/mfa/code', { params })
// }
export function resetPasswordEmail(params){
    return axios.post('/account/reset-password-1', params)
}

export function changePassword(params){
    return axios.post('/account/alter-password', params)
}

export function resetPassword(params){
    return axios.post('/account/reset-password-2', params)
}



