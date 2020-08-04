/*
 * @Author: eson
 * @Description: 主题工具
 */

/**
 * @description: 获取系统主题倾向
 * @return: {string} light|drak
 */
const getAutoThemeName = () => {
  return window.matchMedia('screen and (prefers-color-scheme: light)').matches ? 'light' : 'dark';
}


/**
 * @description: 应用皮肤
 * @param {string} theme auto|light|dark 
 */
export const applyTheme = (theme: string) => {
  const resultTheme = theme === 'auto' ? getAutoThemeName() : theme;
  if (document.body.getAttribute('ui-theme') === resultTheme) return;
  console.log('应用皮肤', resultTheme);
  // let styleElement = document.getElementById(variableesStyleTagIdName);
  // if (!styleElement) {
  //   styleElement = document.createElement('style');
  //   styleElement.id = variableesStyleTagIdName;
  //   document.head.appendChild(styleElement);
  // }
  // styleElement.innerText = `:root { ${formatCSSVariables(resultTheme)} }`;
  document.body.setAttribute('ui-theme', resultTheme);
}


export default { applyTheme, getAutoThemeName };