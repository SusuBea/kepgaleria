window.addEventListener("load", init);
const LIST = [
    "kepek/DSC7365.jpg",
    "kepek/DSC7371_1.jpg",
    "kepek/DSC7444.jpg",
    "kepek/DSC7515.jpg",
  ];


function init() {

  const elem_IMG = document.querySelector("article");

  for (let index = 0; index < LIST.length; index++) {
    elem_IMG.innerHTML += ` <div class="kepek"><img src="${LIST[index]}" alt="kep"></div>`;
  }

  kep_kattintas();
}

function kep_kattintas() {
  const KEPLISTA = document.querySelectorAll(".kepek img");
  for (let index = 0; index < KEPLISTA.length; index++) {
    KEPLISTA[index].addEventListener("click", function(){
        behelyez(index)

    });
  }
}

function behelyez(i) {
//   console.log(event.target);
//   console.log(event.target.src);

  const NAGYKEP = document.querySelector(".nagykep img");
//   console.log(NAGYKEP);

  NAGYKEP.src = LIST[i];
}
