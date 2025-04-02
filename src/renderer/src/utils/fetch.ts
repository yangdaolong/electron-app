const api = 'http://10.20.3.52:24000/'
// const api = '/api/'

export async function get(url, params: never) {
  const queryString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&')

  const res = await fetch(`${api}${url}?${queryString}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  })
  if (res.status === 200) {
    return await res.json()
  } else {
    return Promise.reject(res)
  }
}

export async function post(url: string, params: never) {
  const res = await fetch(`${api}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    body: JSON.stringify(params)
  })
  if (res.status === 200) {
    return await res.json()
  } else {
    return Promise.reject(res)
  }
}
