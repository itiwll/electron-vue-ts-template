import Cookies from 'js-cookie';

// Token key
const tokenKey = 'electron_vue_ts_template_token'


/**
* 获取 token
*/
export const getToken = () => Cookies.get(tokenKey)


/**
* 获取token 
*
* @param {string} token
*/
export const setToken = (token: string) => Cookies.set(tokenKey, token)

/**
* 删除 token
*/
export const removeToken = () => Cookies.remove(tokenKey)

