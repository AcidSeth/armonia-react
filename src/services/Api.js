const BASE_URL = "https://62c96230d9ead251e8baf02e.mockapi.io/campus";

const Api = {
  getUsers: function () {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch(BASE_URL + "/users", requestOptions).then((data) =>
      data.json()
    );
  },
  addArticle: (item) => {
    return fetch(BASE_URL + "/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item }),
    }).then((data) => data.json());
  },
};

export default Api;
