const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.newsexplorerapp.jumpingcrab.com"
    : "http://localhost:3001";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error:${res.staus}`);
}

export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export const getItems = (token) => {
  return request(`${baseUrl}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const saveItems = (
  keyword,
  title,
  text,
  date,
  source,
  image,
  link,
  token
) => {
  return request(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      keyword,
      title,
      text,
      date,
      source,
      image,
      link,
    }),
  });
};

export const deleteNewsItem = (articleId, token) => {
  return request(`${baseUrl}/articles/${articleId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
