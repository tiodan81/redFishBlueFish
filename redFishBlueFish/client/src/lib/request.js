// @flow
import 'whatwg-fetch'
import qs from 'qs'

const checkStatus = (response: {}): Promise => {
  return new Promise((resolve, reject) => {
    if (response.status < 200 || response.status >= 300) {
      const error = new Error(response.statusText)
      error.response = response
      reject(error)
    }

    resolve(response)
  })
}

type QueryParams = {
  [key: string]: string | number,
}

export default function request(url: string, method?: string, queryParams?: QueryParams): Promise {
  const defaultParams = {
    credentials: 'same-origin',
    method: method ? method : 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }

  const queryString = qs.stringify(queryParams)
  const endpoint = queryString ? `${url}?${queryString}` : url

  return fetch(endpoint, defaultParams)
    .then(checkStatus)
    .then(response => response.json())
    .catch(error => console.log('request failed', error))
}
