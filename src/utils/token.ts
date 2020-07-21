import Cookies from 'js-cookie';

// 菜单状态
const sidebarStatusKey = 'sidebar_status'
export /**
 * 获取菜单状态
 *
 */
  const getSidebarStatus = () => Cookies.get(sidebarStatusKey)
export /**
 * 设置菜单状态
 *
 * @param {string} sidebarStatus
 */
  const setSidebarStatus = (sidebarStatus: string) => Cookies.set(sidebarStatusKey, sidebarStatus)

// 语言
const languageKey = 'language'
export /**
 * 获取语言
 *
 */
  const getLanguage = () => Cookies.get(languageKey)
export /**
 * 设置语言
 *
 * @param {string} language
 */
  const setLanguage = (language: string) => Cookies.set(languageKey, language)

// UI 尺寸
const sizeKey = 'size'
export /**
 * 获取 UI 尺寸
 *
 */
  const getSize = () => Cookies.get(sizeKey)
export /**
 * 设置 UI 尺寸
 *
 * @param {string} size
 */
  const setSize = (size: string) => Cookies.set(sizeKey, size)

// Token key
const tokenKey = 'electron_vue_ts_template_token'


export /**
 * 获取 token
 *
 */
  const getToken = () => Cookies.get(tokenKey)


export /**
 * 获取token 
 *
 * @param {string} token
 */
  const setToken = (token: string) => Cookies.set(tokenKey, token)
export /**
 * 删除 token
 *
 */
  const removeToken = () => Cookies.remove(tokenKey)