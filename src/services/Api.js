const BASE_URL = "https://62c96230d9ead251e8baf02e.mockapi.io/campus";

const Api = {
  getUsers: () => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch(BASE_URL + "/users", requestOptions).then((data) =>
      data.json()
    );
  },

  getArticles: () => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch(BASE_URL + "/articles", requestOptions).then((data) =>
      data.json()
    );
  },

  addArticle: (item) => {
    return fetch(BASE_URL + "/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((data) => data.json());
  },

  deleteArticle: (id) => {
    return fetch(BASE_URL + "/articles/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());
  },

  editArticle: (id, item) => {
    return fetch(BASE_URL + "/articles/" + id, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((data) => data.json());
  },
};

export default Api;
