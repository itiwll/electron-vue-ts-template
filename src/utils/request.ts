import axios from 'axios'
// import { Message, MessageBox } from 'element-ui'
/* eslint-disable-next-line  import/no-cycle */
// import { UserModule } from '@/store/user'

const service = axios.create({
  // 请求根路径
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url

  // 超时时间
  timeout: 5000
  // withCredentials: true // send cookies when cross-domain requests
})


export default service