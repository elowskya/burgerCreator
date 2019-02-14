$(document).ready(() => {
    $.ajax({
        url: "./api/burgers",
        method: "GET"
      })
      .then(burgerDatabase => {
        console.log(burgerDatabase);
        console.log("the database has loaded");
        //var $burgerDatabase = $("burgerDatabase").val();
        //$("#burgerDevoured").append(content);
      })


    $("#submitButton").on("click", event => {
      event.preventDefault();
      const $burgerOrder = $("#burgerOrder").val().trim();
      console.log($burgerOrder);

      $.ajax({
          url: "./api/burgers",
          method: "POST",
          data: {
            burger_name: $burgerOrder
          }
        })
        .then(data => {
          console.log(data);
        })
        .catch(err => console.log("ERROR", err));
    });
  });