"use-strict";
let global = window;
global.apiUrl = window.apiurl =
  "http://greenvelvet.alwaysdata.net/bugTracker/api";

function isLoggedIn() {
  let sessionData = localStorage.getItem("result");
  try {
    let jsonData = JSON.parse(sessionData);
    return jsonData.id != undefined && jsonData.token != undefined;
  } catch (error) {
    console.log(error);
    return false;
  }
  return false;
}

function getToken() {
  if (isLoggedIn()) {
    let sessionData = JSON.parse(localStorage.getItem("result"));
    return sessionData;
  }
  alert("test");
  return null;
}
