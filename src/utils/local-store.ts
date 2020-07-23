/*
 * @Author: eson
 * @Description: 本地存储
 * 
 */
import Cookies from 'js-cookie';

// 菜单状态
const sidebarStatusKey = 'sidebar_status'

/**
* 获取菜单状态
*
*/
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey)

/**
* 设置菜单状态
*
* @param {string} sidebarStatus
*/
export const setSidebarStatus = (sidebarStatus: string) => Cookies.set(sidebarStatusKey, sidebarStatus)

// 语言
const languageKey = 'language'
/**
* 获取语言
*
*/
export const getLanguage = () => Cookies.get(languageKey)

/**
* 设置语言
*
* @param {string} language
*/
export const setLanguage = (language: string) => Cookies.set(languageKey, language)

// UI 尺寸
const sizeKey = 'size'

/**
* 获取 UI 尺寸
*
*/
export const getSize = () => Cookies.get(sizeKey)

/**
* 设置 UI 尺寸
*
* @param {string} size
*/
export const setSize = (size: string) => Cookies.set(sizeKey, size)


// 主题
const themeKey = 'theme'

/**
* 获取 Theme
*
*/
export const getTheme = () => Cookies.get(themeKey)

/**
* 设置 Theme
*
* @param {string} theme
*/
export const setTheme = (theme: string) => Cookies.set(themeKey, theme)

