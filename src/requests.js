import React from "react";

export const getUsers = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://62c96230d9ead251e8baf02e.mockapi.io/campus/users",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const getUsersByID = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };    

  fetch(
    "https://62c96230d9ead251e8baf02e.mockapi.io/campus/users/1",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const setUser = () => {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "Giovanna"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://62c96230d9ead251e8baf02e.mockapi.io/campus/users/1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "Giovanna"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://62c96230d9ead251e8baf02e.mockapi.io/campus/users/1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

export const addUser = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      createdAt: "2022-07-09T03:13:54.671Z",
      name: "Johanna D'Amore",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/115.jpg",
      birthdate: "Long-billed Murrelet",
      articlesIds: [1],
      id: "25",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://62c96230d9ead251e8baf02e.mockapi.io/campus/users/",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
};

export const delUser = () => {
    var requestOptions = {
  method: 'DELETE',
  redirect: 'follow'
};

fetch("https://62c96230d9ead251e8baf02e.mockapi.io/campus/users/1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

//

export const getArticles = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://62c96230d9ead251e8baf02e.mockapi.io/campus/articles",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
