//---------Ajax-------------async js xml
//https://fakestoreapi.com/products

//1 - create xmlhttprequest
let request = new XMLHttpRequest();
let div = document.querySelector("section");
console.log(request);
//2 - callback function
request.onload = function () {
  if (request.status === 200 && request.readyState === 4) {
    console.log(JSON.parse(request.responseText));
    let products = JSON.parse(request.responseText);
    products.map((e) => {
      div.innerHTML += `
        <div class='card'>
        <img src='${e.image}' alt='${e.title}'>
        <h3> ${e.title}</h3>
        <span> ${e.price}</span>
        </div>
        `;
    });
  }
};
//open
request.open("GET", "https://fakestoreapi.com/products/", true);
request.send();

function get(name) {
  let request = new XMLHttpRequest();
  let div = document.querySelector("section");
  div.innerHTML = '';
  request.onload = function () {
      if (request.status === 200 && request.readyState === 4) {
          let products = JSON.parse(request.responseText);
          products.forEach((e) => {
              if (e.category === name) {
                  div.innerHTML += `
                  <div class='card'>
                      <img src='${e.image}' alt='${e.title}'>
                      <h3> ${e.title}</h3>
                      <span> ${e.price}</span>
                  </div>`;
              }
          });
      }
  };

  request.open("GET", "https://fakestoreapi.com/products/", true);
  request.send();
}
