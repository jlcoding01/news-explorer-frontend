function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error:${res.staus}`);
}

export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}
