var output = document.querySelector(".output");
var url = "https://mystery-api.kushanksriraj.repl.co/get";

fetch(url).then(function responseHandler(response) {
  console.log(response);
  if (response.status === 401) {
    output.innerText = "You're not logged in";
  } else if (response.status === 404) {
    output.innerText = "Page Not Found";
  } else if (response.status === 200) {
    output.innerText = "No Error";
  }
});
