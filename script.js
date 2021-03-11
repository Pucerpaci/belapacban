'use strict';

document.querySelector('.btn-kezdés').addEventListener('click', function () {
  document.querySelector('.első').classList.remove('hidden');
  document.querySelector('.bevezető').classList.add('hidden');
  document.querySelector('.menü').classList.remove('hidden');
  document.querySelector('.btn-menü-első').classList.remove('hidden');
});

document
  .querySelector('.btn-tovább-első')
  .addEventListener('click', function () {
    document.querySelector('.első').classList.add('hidden');
    document.querySelector('.második').classList.remove('hidden');
    document.querySelector('.btn-menü-második').classList.remove('hidden');
  });

document
  .querySelector('.btn-menü-kezdő')
  .addEventListener('click', function () {
    document.querySelector('.első').classList.add('hidden');
    document.querySelector('.bevezető').classList.remove('hidden');
    document.querySelector('.második').classList.add('hidden');
  });

document.querySelector('.btn-menü-első').addEventListener('click', function () {
  document.querySelector('.első').classList.remove('hidden');
  document.querySelector('.bevezető').classList.add('hidden');
  document.querySelector('.második').classList.add('hidden');
});

document
  .querySelector('.btn-menü-második')
  .addEventListener('click', function () {
    document.querySelector('.második').classList.remove('hidden');
    document.querySelector('.első').classList.add('hidden');
    document.querySelector('.bevezető').classList.add('hidden');
  });

// ----------------------- 1. FELADATHOZ -------------------------------

// TELJES KÉPERNYŐRE SZEKÉR

let szekérkép = document.querySelector('.szekérkép');
function openFullscreen() {
  if (szekérkép.requestFullscreen) {
    szekérkép.requestFullscreen();
  } else if (szekérkép.webkitRequestFullscreen) {
    /* Safari */
    szekérkép.webkitRequestFullscreen();
  } else if (szekérkép.msRequestFullscreen) {
    /* IE11 */
    szekérkép.msRequestFullscreen();
  }
}

let válasz;
let megoldás = '3';

document
  .querySelector('.btn-ellenőrzés-első')
  .addEventListener('click', function () {
    válasz = document.querySelector('#válasz').value;
    console.log(`Válasz: ${válasz}`);
    if (
      válasz === '1 3 12' ||
      válasz === '1 12 3' ||
      válasz === '3 1 12' ||
      válasz === '3 12 1' ||
      válasz === '12 1 3' ||
      válasz === '12 3 1'
    ) {
      document.querySelector('.helyes').classList.remove('hidden');
      document.querySelector('.helytelen').classList.add('hidden');
    } else {
      document.querySelector('.helytelen').classList.remove('hidden');
    }
  });

// MODAL WINDOW:

let segítség;
let segítség1 = document.querySelector('.segítség1');
let segítség2 = document.querySelector('.segítség2');
let segítség3 = document.querySelector('.segítség3');
const overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal');

// const btnsSegítség1 = document.querySelectorAll(".btn-segítség1");

const openModal = function () {
  segítség.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

document.querySelector('.btn-segítség1').addEventListener('click', function () {
  segítség = segítség1;
  openModal();
});
document.querySelector('.btn-segítség2').addEventListener('click', function () {
  segítség = segítség2;
  openModal();
});
document.querySelector('.btn-segítség3').addEventListener('click', function () {
  segítség = segítség3;
  openModal();
});

document
  .querySelector('.close-segítség1')
  .addEventListener('click', function () {
    segítség1.classList.add('hidden');
    overlay.classList.add('hidden');
  });
document
  .querySelector('.close-segítség2')
  .addEventListener('click', function () {
    segítség2.classList.add('hidden');
    overlay.classList.add('hidden');
  });
document
  .querySelector('.close-segítség3')
  .addEventListener('click', function () {
    segítség3.classList.add('hidden');
    overlay.classList.add('hidden');
  });

// ----------------------- 2. FELADATHOZ -------------------------------

// TELJES KÉPERNYŐRE ROVÁS

let rováskép = document.querySelector('.rováskép');
function openFullscreen2() {
  if (rováskép.requestFullscreen) {
    rováskép.requestFullscreen();
  } else if (rováskép.webkitRequestFullscreen) {
    /* Safari */
    rováskép.webkitRequestFullscreen();
  } else if (rováskép.msRequestFullscreen) {
    /* IE11 */
    rováskép.msRequestFullscreen();
  }
}

let válasz2;
let megoldás2 = 'Vadna';

document
  .querySelector('.btn-ellenőrzés-második')
  .addEventListener('click', function () {
    válasz2 = document.querySelector('#válasz2').value;
    console.log(`Válasz: ${válasz2}`);
    if (válasz2 === megoldás2) {
      document.querySelector('.helyes2').classList.remove('hidden');
      document.querySelector('.helytelen2').classList.add('hidden');
    } else {
      document.querySelector('.helytelen2').classList.remove('hidden');
    }
  });

// MODAL WINDOW:

// let segítség;
let segítség4 = document.querySelector('.segítség4');
let segítség5 = document.querySelector('.segítség5');
let segítség6 = document.querySelector('.segítség6');
// const overlay = document.querySelector('.overlay');
// let btnCloseModal = document.querySelector('.close-modal');

// const btnsSegítség1 = document.querySelectorAll(".btn-segítség1");

// const openModal = function () {
//   segítség.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

document.querySelector('.btn-segítség4').addEventListener('click', function () {
  segítség = segítség4;
  openModal();
});
document.querySelector('.btn-segítség5').addEventListener('click', function () {
  segítség = segítség5;
  openModal();
});
document.querySelector('.btn-segítség6').addEventListener('click', function () {
  segítség = segítség6;
  openModal();
});

document
  .querySelector('.close-segítség4')
  .addEventListener('click', function () {
    segítség4.classList.add('hidden');
    overlay.classList.add('hidden');
  });
document
  .querySelector('.close-segítség5')
  .addEventListener('click', function () {
    segítség5.classList.add('hidden');
    overlay.classList.add('hidden');
  });
document
  .querySelector('.close-segítség6')
  .addEventListener('click', function () {
    segítség6.classList.add('hidden');
    overlay.classList.add('hidden');
  });
