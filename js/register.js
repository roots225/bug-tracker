"use-strict";

if (isLoggedIn()) {
  window.location.replace("/index.html");
}

$("#register-form").on("submit", function (e) {
  e.preventDefault();
  let username = $("#username").val();
  let password = $("#password").val();

  $.ajax({
    url: apiUrl + `/signup/${username}/${password}`,
    type: "GET",
    beforeSend: function () {
      $("#register-form button")
        .text("loading...")
        .attr("disabled", "disabled");
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
      $("#register-form button").text("ENTRER").attr("disabled", "");
    },
  });
});
