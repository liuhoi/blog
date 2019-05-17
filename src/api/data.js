import axios from '@/libs/api.request'

export const getProjectsFrmGithub = () => {
  return axios.request({
    headers: {
      Accept: "application/vnd.github.v3.raw"
    },
    url: 'https://api.github.com/users/liuhoi/repos',
    method: 'get'
  })
}
export const getDetail = () => {
  return axios.request({
    url: '/markdown/android.md',
    method: 'get'
  })
}
