/* eslint linebreak-style: ["error", "windows"] */
/** **********************************DOM******************************************** */

const containerAdicionales = document.getElementById('adicional');
const containerPostres = document.getElementById('postres');
const containerExtras = document.getElementById('extras');
const containerBebidas = document.getElementById('bebidas');


const incrementTotal = (idNumberBox) => {
  let number = document.querySelector(`#${idNumberBox}`).textContent;
  number = parseInt(number, 10) + 1; // valor del número central
  document.querySelector(`#${idNumberBox}`).innerText = number;
};

const decrementTotal = (idNumberBox) => {
  let numberCountPizza = document.querySelector(`#${idNumberBox}`).textContent;
  numberCountPizza = parseInt(numberCountPizza, 10) - 1;
  if (numberCountPizza >= 0) {
    document.querySelector(`#${idNumberBox}`).innerText = numberCountPizza;
  }
};
const activeButtonIncrement = (element, idNumber) => {
  const number = element.parentElement.previousElementSibling;
  const btnDecrement = number.previousElementSibling.children[0].id;
  const btnIncrement = element.id;
  if (document.querySelector(`#${idNumber}`).textContent > 0) {
    document.querySelector(`#${btnDecrement}`).classList.add('btn-active');
    document.querySelector(`#${btnIncrement}`).classList.add('btn-active');
  }
};

const desactiveButtonIncrement = (element, idNumber) => {
  const number = element.parentElement.nextElementSibling;
  const btnIncrement = number.nextElementSibling.children[0].id;
  const btnDecrement = element.id;
  if (document.querySelector(`#${idNumber}`).textContent === '0') {
    document.querySelector(`#${btnIncrement}`).classList.remove('btn-active');
    document.querySelector(`#${btnDecrement}`).classList.remove('btn-active');
  }
};


// Execute

// Events

document.addEventListener('click', (event) => {
  const arrayELements = event.path;
  for (let i = 0; i < arrayELements.length; i += 1) {
    if (arrayELements[i].localName === 'button') {
      if (arrayELements[i].classList[0] === 'increment') {
        const idNumber = arrayELements[i].parentElement.previousElementSibling.id;
        incrementTotal(idNumber);
        activeButtonIncrement(arrayELements[i], idNumber);
      }
      if (arrayELements[i].classList[0] === 'decrement') {
        const idNumber = arrayELements[i].parentElement.nextElementSibling.id;
        decrementTotal(idNumber);
        desactiveButtonIncrement(arrayELements[i], idNumber);
      }
    }
  }
});

/* Función que inserta los valores con el estilo determinado de acuerdo
 a la cantidad de palabras que tenga la descripción */

const templateProducts = (element, container) => {
  const boxContainer = container;
  let templateSelect = ' ';
  // template adicional : opciones de salsas A5= id de poppers chicken
  if (element.id === 'A5') {
    templateSelect = `<div class="form-group">
                        <label for="exampleFormControlSelect1">Elige tu salsa favorita:</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                          <option>Salsa BBQ</option>
                          <option>Salsa Buffalo</option>
                          <option>Salsa Garlic</option>
                        </select>
                      </div> `;
  }
  const template = ` <div class="adicional-item">
  <div>
    <div class="title">
      <p class="mb-0 adicional__name text-center">${element.name}</p>
    </div>
  </div>
  <div><img class="img-fluid" src="${element.image}"></div>
  <div><p class="text-center mb-0 adicional__name">S/ ${element.price}</p></div>
  <div> <p class="adicional--font14 text-center mb-2">${element.description}</p></div>
  <div class="template-select text-center p-1">
    ${templateSelect}
  </div>
  <div class="botones">
    <div><button class="decrement adicional__button" id="${element.id}decrement"> <i class="fas fa-minus"></i></button></div>
    <div class="text-center adicional__number-span" id=${element.id}${element.name}>0</div>
    <div><button class="increment adicional__button"  id="${element.id}aument"><i class="fas fa-plus"></i></button></div>
  </div>
  
</div>`;
  boxContainer.innerHTML += template;
};

const { adicionales } = data.products;
const { extras } = data.products;
const { postres } = data.products;
const { bebidas } = data.products;

adicionales.forEach((element) => {
  templateProducts(element, containerAdicionales);
});

extras.forEach((element) => {
  templateProducts(element, containerExtras);
});

postres.forEach((element) => {
  templateProducts(element, containerPostres);
});

bebidas.forEach((element) => {
  templateProducts(element, containerBebidas);
});

