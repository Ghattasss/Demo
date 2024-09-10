// class Car {
//   _model;
//   _color;
//   _name;
//   constructor(name, color, model) {
//     this._name = name;
//     this._color = color;
//     this._model = model;
//   }
//   display() {
//     document.write(
//       `Car Name => ${this._name} <br/> color => ${this._color} <br/> model => ${this._model} <br/>`
//     );
//   }
// }

// class BMW extends Car {
//   _speed;
//   constructor(name, color, model, speed) {
//     super(name, color, model);
//     this._speed = speed;
//   }
//   displayBMW() {
//     document.write(
//       `Car Name => ${this._name} <br/> color => ${this._color} <br/> model => ${this._model} <br/> speed => ${this._speed}`
//     );
//   }
// }

// let bmw = new BMW("BMW", "BLACK", 2020, 200);
// bmw.displayBMW();

// setTimeout(() => {
//     console.log("timeout1");
// }, 0);
// setTimeout(() => {
//     console.log("timeout2");
// }, 0);
// setTimeout(() => {
//     console.log("timeout3");
// }, 50);
// function one() {
//     console.log(1);
// }
// function two() {
//     one();
//     console.log(2);
// }
// function three() {
//     two();
//     console.log(3);
// }
// three();

// async function getName(n) {
//     let name = await n;
//     return name;
// }

// let myname = getName("mohmaed");
// console.log(myname);

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
