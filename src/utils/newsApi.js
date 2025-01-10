import { request } from "./api";

let today = new Date();
let currentDate = today.toJSON().slice(0, 10);
let oneWeekBefore = new Date(today.setDate(today.getDate() - 7))
  .toJSON()
  .slice(0, 10);

export const newsApi = (keyword, apiKey) => {
  return request(
    `https://nomoreparties.co/news/v2/everything?q=${keyword}&from=${oneWeekBefore}&to=${currentDate}&pageSize=30&apiKey=${apiKey}`,
    {
      authorization: apiKey,
      "Content-type": "application/json",
    }
  );
};

export const processData = (data) => {
  const result = [];
  data.articles.forEach((item) => {
    const cardData = {};
    if (
      item.source.name !== "[Removed]" &&
      item.title !== "[Removed]" &&
      item.content !== "[Removed]" &&
      item.urlToImage !== null
    ) {
      cardData.date = new Date(item.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      cardData.title = item.title;
      cardData.text = item.description;
      cardData.image = item.urlToImage;
      cardData.source = item.source.name.toUpperCase();
      cardData.link = item.url;
      cardData.isSaved = false;
      cardData.keyword = "";
      result.push(cardData);
    }
  });
  return result;
};
