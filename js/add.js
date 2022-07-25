"use-strict";

if (!isLoggedIn()) {
  window.location.replace("/login.html");
}

$("#add-bug").on("submit", function (e) {
  e.preventDefault();

  let token = getToken().token;
  let userId = getToken().id;

  let title = $("#title").val();
  let description = $("#description").val();

  $.ajax({
    url: apiUrl + `/add/${token}/${userId}`,
    type: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    crossDomain: true,
    dataType: "json",
    data: {
      title,
      description,
    },
    beforeSend: function () {
      $("#add-bug button").text("loading...").attr("disabled", "disabled");
    },
    success: function (res) {
      try {
        let jsonResponse = JSON.parse(res);
        console.log(jsonResponse);
      } catch (err) {
        console.log(err);
      }
    },
    error: function (err) {
      console.log(err);
    },
    complete: function () {
      $("#add-bug button").text("ENREGISTRER").removeAttr("disabled");
    },
  });
});

$("#logout").on("click", function (e) {
  e.preventDefault();
  localStorage.removeItem("result");
  window.location.replace("/login.html");
});
