"use-strict";
console.log(isLoggedIn());
if (!isLoggedIn()) {
  window.location.replace("/login.html");
}

$("#logout").on("click", function (e) {
  e.preventdefault();
  localStorage.removeItem("result");
  window.location.replace("/login.html");
});
