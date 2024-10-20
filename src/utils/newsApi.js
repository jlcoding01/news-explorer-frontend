import { request } from "./api";

let today = new Date();
let currentDate = today.toJSON().slice(0, 10);
let oneWeekBefore = new Date(today.setDate(today.getDate() - 7))
  .toJSON()
  .slice(0, 10);

// const itemID = Array.from({ length: 24 }, () =>
//   Math.floor(Math.random() * 16).toString(16)
// ).join("");

export const newsApi = (keyword, apiKey) => {
  return request(
    `https://newsapi.org/v2/everything?q=${keyword}&from=${oneWeekBefore}&to=${currentDate}&pageSize=30&apiKey=${apiKey}`,
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
      cardData.publishedAt = new Date(item.publishedAt).toLocaleDateString(
        "en-US",
        { year: "numeric", month: "long", day: "numeric" }
      );
      cardData.id = Array.from({ length: 24 }, () =>
        Math.floor(Math.random() * 16).toString(16)
      ).join("");
      cardData.title = item.title;
      cardData.description = item.description;
      cardData.urlToImage = item.urlToImage;
      cardData.name = item.source.name.toUpperCase();
      cardData.isSaved = false;
      cardData.keyword = "";
      result.push(cardData);
    }
  });
  return result;
};
