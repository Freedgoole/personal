import { LOGIN } from '../store/constans'

const loginAuthorization = payload => ({type: LOGIN.SAGA.LOGIN_AUTHORIZATION, payload})

export const LoginActions = {
    loginAuthorization
}