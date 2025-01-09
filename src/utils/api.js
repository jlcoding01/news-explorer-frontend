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

// export function getItems() {
//   return new Promise((resolve, reject) =>
//     resolve([
//       {
//         publishedAt: "October 14, 2024",
//         id: "72dd5dcfcfef4424226453a7",
//         title:
//           "3 US-based academics awarded the Nobel Prize in economics for their work on wealth inequality",
//         description:
//           'Daron Acemoglu, Simon Johnson, and James A. Robinson won the prize for their "studies of how institutions are formed and affect prosperity."',
//         urlToImage:
//           "https://i.insider.com/670cfb183f2165d716e08c41?width=1200&format=jpeg",
//         name: "BUSINESS INSIDER",
//         isSaved: true,
//         keyword: "Economics",
//       },
//       {
//         publishedAt: "October 18, 2024",
//         id: "89974d52fd1976ff6cac1e3d",
//         title:
//           "23 Crafty Cat Memes Meowing Loud and Laughing Mightily Until You Meow and Laugh Yourself",
//         description:
//           "Hello cat pawrents, can't wait for the weekend to spend some quality time with your cat? Well, the weekend is right around the corner, so it's very soon that you'll be able to cuddle with your cute cat all day long.\r\nBut have you ever tried meowing to your ca…",
//         urlToImage:
//           "https://i.chzbgr.com/original/37314053/hED2DF391/is-85-eyes-and-one-meme-including-my-back-hurts-maybe-my-wings-are-growing-in-cus-im-such-an-angel",
//         name: "CHEEZBURGER.COM",
//         isSaved: true,
//         keyword: "Cat",
//       },
//       {
//         publishedAt: "October 15, 2024",
//         id: "9fa882459883958f297791a5",
//         title:
//           "NBA Rank 2024: Who made it in? Where is Klay Thompson? Our countdown begins",
//         description:
//           "NBA Rank is back! We're counting down the top 100 players in the league. What players broke into Nos. 100 to 51?",
//         urlToImage:
//           "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1010%2Fnba_rank%2D100%2D51_16x9.jpg",
//         name: "ESPN",
//         isSaved: true,
//         keyword: "NBA",
//       },
//       {
//         publishedAt: "October 16, 2024",
//         id: "48a68262866c7ded8c9d226f",
//         title:
//           "An incoming 'M&A supercycle' wouldn't just be a win for dealmakers",
//         description:
//           "Goldman Sachs' earnings hint at the revival of the M&A market, which could help companies big and small.",
//         urlToImage:
//           "https://i.insider.com/670fa446a70318649282b2f4?width=1000&format=jpeg",
//         name: "BUSINESS INSIDER",
//         isSaved: true,
//         keyword: "Bitcoin",
//       },
//       {
//         publishedAt: "October 17, 2024",
//         id: "1ed1a82ffc3679b7618c9943",
//         title:
//           "YouTube is testing its cheaper Premium Lite subscription again, but it now has limited ads",
//         description:
//           "YouTube has been testing a new version of its Premium Lite subscription in Australia, Germany, and Thailand, and based on screenshots, it has limited ads.",
//         urlToImage:
//           "https://cdn.vox-cdn.com/thumbor/kSc1MrTy-5jpSGwFwD8Mi2k0Pok=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23986639/acastro_STK092_03.jpg",
//         name: "THE VERGE",
//         isSaved: true,
//         keyword: "Technology",
//       },
//     ])
//   );
// }

// export function saveItems(articles) {
//   return new Promise((resolve, reject) => {
//     resolve({});
//   });
// }

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
