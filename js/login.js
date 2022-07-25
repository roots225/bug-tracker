"use-strict";

if (isLoggedIn()) {
  window.location.replace("/index.html");
}

$("#login-form").on("submit", function (e) {
  e.preventDefault();
  let username = $("#username").val();
  let password = $("#password").val();

  $.ajax({
    url: apiUrl + `/login/${username}/${password}`,
    type: "GET",
    beforeSend: function () {
      $("#login-form button").text("loading...").attr("disabled", "disabled");
    },
    success: function (res) {
      let jsonResponse = JSON.parse(res);
      localStorage.setItem("result", JSON.stringify(jsonResponse.result));
      window.location.replace("/index.html");
    },
    error: function (err) {
      console.log(err);
    },
    complete: function () {
      $("#login-form button").text("ENTRER").attr("disabled", "");
    },
  });
});
