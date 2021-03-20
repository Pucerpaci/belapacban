"use strict";

let murany1 = document.getElementById("murany1");
let murany2 = document.getElementById("murany2");

document.querySelector(".btn-kezdés").addEventListener("click", function () {
  document.querySelector(".első").classList.remove("hidden");
  document.querySelector(".bevezető").classList.add("hidden");
  document.querySelector(".menü").classList.remove("hidden");
  document.querySelector(".btn-menü-első").classList.remove("hidden");
});

document
  .querySelector(".btn-tovább-első")
  .addEventListener("click", function () {
    document.querySelector(".első").classList.add("hidden");
    document.querySelector(".második").classList.remove("hidden");
    document.querySelector(".btn-menü-második").classList.remove("hidden");
    document.querySelector(".merrekirályleír").textContent =
      "A bélapátfalvai ciszterci kolostor a 815 m magas Bél-kő lábánál, egy erdős-ligetes emelkedésen fakadó forrás (Háromkút) mellett található. Ez Magyarország egyedüli épségben megmaradt romanikus stílusú ciszterci apátsági temploma, amely 1232-től kezdve épült. A monostor, amely a templom mellett állt, már korábban megépült. Az apátság temploma nemzetközileg is elismert műemléki és történeti nevezetesség.";
    document.querySelector(".merrecím").textContent =
      "Bélapátfalvai Ciszterci Apátság";
    document.getElementById("merrekép").src = "bélapát_2.jpg";
  });

document
  .querySelector(".btn-tovább-második")
  .addEventListener("click", function () {
    document.querySelector(".harmadik").classList.remove("hidden");
    document.querySelector(".első").classList.add("hidden");
    document.querySelector(".második").classList.add("hidden");
    document.querySelector(".btn-menü-harmadik").classList.remove("hidden");
    document.querySelector(".merrekirályleír").textContent =
      "Egy 1246. január 10-én kelt királyi oklevélben szerepel először Fülek, annak kapcsán, hogy a várat és tartozékait IV. Béla elkobozza akkori garázdálkodó urától, a Kacsics nemzetségbeli Folkustól (Fulkó), s odaajándékozza a Pok nemzetségből származó Móricnak. Fulkó a tatárjárás idején haranggal csalogatta magához a tatárok elől menekülőket, akiket aztán kirabolt és megölt. Tény, hogy meggyilkolta a rokonát is, amiért aztán a király (istenítéletként) párbajra ítélte, de barátai közbenjárására kegyelmet kapott. Ennek ellenére folytatta a gaztetteit; hamis pénzt veretett, a királyt sértegette stb., aki mindezt megelégelve arra ítélte, hogy meztelenül párbajozzon egy harcossal. Fulkó azonban a börtöntársával megölte az őröket és megszökött. Magányosan élt, amíg öngyilkosságot nem követett el.";
    document.querySelector(".merrecím").textContent = "Füleki vár";
    document.getElementById("merrekép").src = "fulek_var_2.jpg";
  });

document
  .querySelector(".btn-tovább-harmadik")
  .addEventListener("click", function () {
    document.querySelector(".negyedik").classList.remove("hidden");
    document.querySelector(".harmadik").classList.add("hidden");
    document.querySelector(".első").classList.add("hidden");
    document.querySelector(".második").classList.add("hidden");
    document.querySelector(".btn-menü-negyedik").classList.remove("hidden");
    document.querySelector(".merrekirályleír").textContent =
      "Murány várát mint királyi védvárat a 13. században a Murányi-fennsík peremén 935 m magasságban található Cigánka nevű kőszirtre építették. A 16. század első felében Bacsó Mátyás rablólovag kezére jutott, akit 1549-ben kivégeztek. A legnagyobb fellendülését a szépségének köszönhetően Murányi Vénusznak elnevezett Széchy Mária élete alatt érte el. A várat abban az időben fényűzően átalakították és falai között a magyar nemesség élénk társadalmi életet folytatott. Sőt a gyönyörű és bátor Mária I. Leopold király ellen is védte a várat azonban ő sem tudta megakadályozni annak elfoglalását 1670-ben. 1702-ben a vár leégett és csak részben volt kényszerhelyzetben felújítva. A 18. században a vár kétszer kiégett és a 18. század végén már lakatlan volt. Murány vára jelenleg várrom - fennmaradt területtel és bejárati toronnyal. A vár-együttes 360 és 96 m kiterjedésű területet foglal el. Fennmaradt a gótikus palota alapzata, a körfal- és néhány melléképület-maradvány. A legjobb állapotban a tornyos bejárati kapu található.";
    document.querySelector(".merrecím").textContent = "Murány vára";
    document.getElementById("merrekép").src = "murány2.jpg";
    murany1.play();
  });

document
  .querySelector(".btn-tovább-negyedik")
  .addEventListener("click", function () {
    document.querySelector(".ötödik").classList.remove("hidden");
    document.querySelector(".negyedik").classList.add("hidden");
    document.querySelector(".harmadik").classList.add("hidden");
    document.querySelector(".első").classList.add("hidden");
    document.querySelector(".második").classList.add("hidden");
    document.querySelector(".btn-menü-ötödik").classList.remove("hidden");
    document.querySelector(".merrekirályleír").textContent =
      "Murány várát mint királyi védvárat a 13. században a Murányi-fennsík peremén 935 m magasságban található Cigánka nevű kőszirtre építették. A 16. század első felében Bacsó Mátyás rablólovag kezére jutott, akit 1549-ben kivégeztek. A legnagyobb fellendülését a szépségének köszönhetően Murányi Vénusznak elnevezett Széchy Mária élete alatt érte el. A várat abban az időben fényűzően átalakították és falai között a magyar nemesség élénk társadalmi életet folytatott. Sőt a gyönyörű és bátor Mária I. Leopold király ellen is védte a várat azonban ő sem tudta megakadályozni annak elfoglalását 1670-ben. 1702-ben a vár leégett és csak részben volt kényszerhelyzetben felújítva. A 18. században a vár kétszer kiégett és a 18. század végén már lakatlan volt. Murány vára jelenleg várrom - fennmaradt területtel és bejárati toronnyal. A vár-együttes 360 és 96 m kiterjedésű területet foglal el. Fennmaradt a gótikus palota alapzata, a körfal- és néhány melléképület-maradvány. A legjobb állapotban a tornyos bejárati kapu található.";
    document.querySelector(".merrecím").textContent = "Murány vára";
    document.getElementById("merrekép").src = "murány2.jpg";
  });

document
  .querySelector(".btn-menü-kezdő")
  .addEventListener("click", function () {
    document.querySelector(".első").classList.add("hidden");
    document.querySelector(".bevezető").classList.remove("hidden");
    document.querySelector(".második").classList.add("hidden");
    document.querySelector(".harmadik").classList.add("hidden");
    document.querySelector(".negyedik").classList.add("hidden");
    document.querySelector(".ötödik").classList.add("hidden");
  });

document.querySelector(".btn-menü-első").addEventListener("click", function () {
  document.querySelector(".első").classList.remove("hidden");
  document.querySelector(".bevezető").classList.add("hidden");
  document.querySelector(".második").classList.add("hidden");
  document.querySelector(".harmadik").classList.add("hidden");
  document.querySelector(".negyedik").classList.add("hidden");
  document.querySelector(".ötödik").classList.add("hidden");
  document.querySelector(".merrekirályleír").textContent =
    "A terület az őskortól lakott. A 13. században két település állt itt, Muhi mezőváros és Poga falu. 1241-ben itt zajlott a muhi csata, amelyben a tatárok legyőzték IV. Béla seregeit. A település megsemmisült, a 14. századra települt be újra. Eger eleste és a mezőkeresztesi csata után újra pusztává vált. Az országos jelentőségű útvonal mentén fekvő Muhi a 14. század óta a diósgyőri uradalom része, a 16. század elejéig királynéi birtok. II. Lajos 1520-ban engedélyezte, hogy a településen két országos vásárt tartsanak. Török puszítások 1526-ban, 1541-ben és 1583-ban is sújtják a falut. 1596 után a település elpusztul. A diósgyőri uradalom Muhi földjeit majorságnak használják. Poga a 18. században újra benépesült, 1928-ban pedig átnevezték Muhira.";
  document.querySelector(".merrecím").textContent = "Muhi";
  document.getElementById("merrekép").src = "merre1.jpg";
});

document
  .querySelector(".btn-menü-második")
  .addEventListener("click", function () {
    document.querySelector(".második").classList.remove("hidden");
    document.querySelector(".első").classList.add("hidden");
    document.querySelector(".bevezető").classList.add("hidden");
    document.querySelector(".harmadik").classList.add("hidden");
    document.querySelector(".negyedik").classList.add("hidden");
    document.querySelector(".ötödik").classList.add("hidden");
    document.querySelector(".merrekirályleír").textContent =
      "A bélapátfalvai ciszterci kolostor a 815 m magas Bél-kő lábánál, egy erdős-ligetes emelkedésen fakadó forrás (Háromkút) mellett található. Ez Magyarország egyedüli épségben megmaradt romanikus stílusú ciszterci apátsági temploma, amely 1232-től kezdve épült. A monostor, amely a templom mellett állt, már korábban megépült. Az apátság temploma nemzetközileg is elismert műemléki és történeti nevezetesség.";
    document.querySelector(".merrecím").textContent =
      "Bélapátfalvai Ciszterci Apátság";
    document.getElementById("merrekép").src = "bélapát_2.jpg";
  });

document
  .querySelector(".btn-menü-harmadik")
  .addEventListener("click", function () {
    document.querySelector(".harmadik").classList.remove("hidden");
    document.querySelector(".ötödik").classList.add("hidden");
    document.querySelector(".negyedik").classList.add("hidden");
    document.querySelector(".második").classList.add("hidden");
    document.querySelector(".első").classList.add("hidden");
    document.querySelector(".bevezető").classList.add("hidden");
    document.querySelector(".merrekirályleír").textContent =
      "Egy 1246. január 10-én kelt királyi oklevélben szerepel először Fülek, annak kapcsán, hogy a várat és tartozékait IV. Béla elkobozza akkori garázdálkodó urától, a Kacsics nemzetségbeli Folkustól (Fulkó), s odaajándékozza a Pok nemzetségből származó Móricnak. Fulkó a tatárjárás idején haranggal csalogatta magához a tatárok elől menekülőket, akiket aztán kirabolt és megölt. Tény, hogy meggyilkolta a rokonát is, amiért aztán a király (istenítéletként) párbajra ítélte, de barátai közbenjárására kegyelmet kapott. Ennek ellenére folytatta a gaztetteit; hamis pénzt veretett, a királyt sértegette stb., aki mindezt megelégelve arra ítélte, hogy meztelenül párbajozzon egy harcossal. Fulkó azonban a börtöntársával megölte az őröket és megszökött. Magányosan élt, amíg öngyilkosságot nem követett el.";
    document.querySelector(".merrecím").textContent = "Füleki vár";
    document.getElementById("merrekép").src = "fulek_var_2.jpg";
  });

document
  .querySelector(".btn-menü-negyedik")
  .addEventListener("click", function () {
    document.querySelector(".negyedik").classList.remove("hidden");
    document.querySelector(".ötödik").classList.add("hidden");
    document.querySelector(".harmadik").classList.add("hidden");
    document.querySelector(".második").classList.add("hidden");
    document.querySelector(".első").classList.add("hidden");
    document.querySelector(".bevezető").classList.add("hidden");
    document.querySelector(".merrekirályleír").textContent =
      "Murány várát mint királyi védvárat a 13. században a Murányi-fennsík peremén 935 m magasságban található Cigánka nevű kőszirtre építették. A 16. század első felében Bacsó Mátyás rablólovag kezére jutott, akit 1549-ben kivégeztek. A legnagyobb fellendülését a szépségének köszönhetően Murányi Vénusznak elnevezett Széchy Mária élete alatt érte el. A várat abban az időben fényűzően átalakították és falai között a magyar nemesség élénk társadalmi életet folytatott. Sőt a gyönyörű és bátor Mária I. Leopold király ellen is védte a várat azonban ő sem tudta megakadályozni annak elfoglalását 1670-ben. 1702-ben a vár leégett és csak részben volt kényszerhelyzetben felújítva. A 18. században a vár kétszer kiégett és a 18. század végén már lakatlan volt. Murány vára jelenleg várrom - fennmaradt területtel és bejárati toronnyal. A vár-együttes 360 és 96 m kiterjedésű területet foglal el. Fennmaradt a gótikus palota alapzata, a körfal- és néhány melléképület-maradvány. A legjobb állapotban a tornyos bejárati kapu található.";
    document.querySelector(".merrecím").textContent = "Murány vára";
    document.getElementById("merrekép").src = "murány2.jpg";
  });

document
  .querySelector(".btn-merrekirály")
  .addEventListener("click", function () {
    document.querySelector(".merrekirály").classList.remove("hidden");
  });

document
  .querySelector(".close-merrekirály")
  .addEventListener("click", function () {
    document.querySelector(".merrekirály").classList.add("hidden");
  });

// ----------------------- 1. FELADATHOZ -------------------------------

// TELJES KÉPERNYŐRE SZEKÉR

let szekérkép = document.querySelector(".szekérkép");
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
let megoldás = "3";

document
  .querySelector(".btn-ellenőrzés-első")
  .addEventListener("click", function () {
    válasz = document.querySelector("#válasz").value;
    console.log(`Válasz: ${válasz}`);
    if (
      válasz === "1 3 12" ||
      válasz === "1 12 3" ||
      válasz === "3 1 12" ||
      válasz === "3 12 1" ||
      válasz === "12 1 3" ||
      válasz === "12 3 1"
    ) {
      document.querySelector(".helyes").classList.remove("hidden");
      document.querySelector(".helytelen").classList.add("hidden");
    } else {
      document.querySelector(".helytelen").classList.remove("hidden");
    }
  });

// MODAL WINDOW:

let segítség;
let segítség1 = document.querySelector(".segítség1");
let segítség2 = document.querySelector(".segítség2");
let segítség3 = document.querySelector(".segítség3");
const overlay = document.querySelector(".overlay");
let btnCloseModal = document.querySelector(".close-modal");

// const btnsSegítség1 = document.querySelectorAll(".btn-segítség1");

const openModal = function () {
  segítség.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

document.querySelector(".btn-segítség1").addEventListener("click", function () {
  segítség = segítség1;
  openModal();
});
document.querySelector(".btn-segítség2").addEventListener("click", function () {
  segítség = segítség2;
  openModal();
});
document.querySelector(".btn-segítség3").addEventListener("click", function () {
  segítség = segítség3;
  openModal();
});

document
  .querySelector(".close-segítség1")
  .addEventListener("click", function () {
    segítség1.classList.add("hidden");
    overlay.classList.add("hidden");
  });
document
  .querySelector(".close-segítség2")
  .addEventListener("click", function () {
    segítség2.classList.add("hidden");
    overlay.classList.add("hidden");
  });
document
  .querySelector(".close-segítség3")
  .addEventListener("click", function () {
    segítség3.classList.add("hidden");
    overlay.classList.add("hidden");
  });

// ----------------------- 2. FELADATHOZ -------------------------------

// TELJES KÉPERNYŐRE ROVÁS

let rováskép = document.querySelector(".rováskép");
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
let megoldás2 = "Fülek";

document
  .querySelector(".btn-ellenőrzés-második")
  .addEventListener("click", function () {
    válasz2 = document.querySelector("#válasz2").value;
    console.log(`Válasz: ${válasz2}`);
    if (válasz2 === megoldás2) {
      document.querySelector(".helyes2").classList.remove("hidden");
      document.querySelector(".helytelen2").classList.add("hidden");
    } else {
      document.querySelector(".helytelen2").classList.remove("hidden");
    }
  });

// MODAL WINDOW:

// let segítség;
let segítség4 = document.querySelector(".segítség4");
let segítség5 = document.querySelector(".segítség5");
let segítség6 = document.querySelector(".segítség6");
// const overlay = document.querySelector('.overlay');
// let btnCloseModal = document.querySelector('.close-modal');

// const btnsSegítség1 = document.querySelectorAll(".btn-segítség1");

// const openModal = function () {
//   segítség.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

document.querySelector(".btn-segítség4").addEventListener("click", function () {
  segítség = segítség4;
  openModal();
});
document.querySelector(".btn-segítség5").addEventListener("click", function () {
  segítség = segítség5;
  openModal();
});
document.querySelector(".btn-segítség6").addEventListener("click", function () {
  segítség = segítség6;
  openModal();
});

document
  .querySelector(".close-segítség4")
  .addEventListener("click", function () {
    segítség4.classList.add("hidden");
    overlay.classList.add("hidden");
  });
document
  .querySelector(".close-segítség5")
  .addEventListener("click", function () {
    segítség5.classList.add("hidden");
    overlay.classList.add("hidden");
  });
document
  .querySelector(".close-segítség6")
  .addEventListener("click", function () {
    segítség6.classList.add("hidden");
    overlay.classList.add("hidden");
  });

// ------------------------- 3. FELADAT -------------------------------

let válasz3;
let megoldás3 = "80291";

document
  .querySelector(".btn-ellenőrzés-harmadik")
  .addEventListener("click", function () {
    válasz3 = document.querySelector("#válasz3").value;
    console.log(`Válasz: ${válasz3}`);
    if (válasz3 === megoldás3) {
      document.querySelector(".helyes3").classList.remove("hidden");
      document.querySelector(".helytelen3").classList.add("hidden");
    } else {
      document.querySelector(".helytelen3").classList.remove("hidden");
    }
  });

// MODAL WINDOW:

// let segítség;
let segítség7 = document.querySelector(".segítség7");
let segítség8 = document.querySelector(".segítség8");
let segítség9 = document.querySelector(".segítség9");
// const overlay = document.querySelector('.overlay');
// let btnCloseModal = document.querySelector('.close-modal');

// const btnsSegítség1 = document.querySelectorAll(".btn-segítség1");

// const openModal = function () {
//   segítség.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

document.querySelector(".btn-segítség7").addEventListener("click", function () {
  segítség = segítség7;
  openModal();
});
document.querySelector(".btn-segítség8").addEventListener("click", function () {
  segítség = segítség8;
  openModal();
});
document.querySelector(".btn-segítség9").addEventListener("click", function () {
  segítség = segítség9;
  openModal();
});

document
  .querySelector(".close-segítség7")
  .addEventListener("click", function () {
    segítség7.classList.add("hidden");
    overlay.classList.add("hidden");
  });
document
  .querySelector(".close-segítség8")
  .addEventListener("click", function () {
    segítség8.classList.add("hidden");
    overlay.classList.add("hidden");
  });
document
  .querySelector(".close-segítség9")
  .addEventListener("click", function () {
    segítség9.classList.add("hidden");
    overlay.classList.add("hidden");
  });

// -------------------------- 4. FELADATHOZ ---------------------------------

let válasz4;
let megoldás4 = "5 7 6 9 2 4 10 1 3 8";

document
  .querySelector(".btn-ellenőrzés-negyedik")
  .addEventListener("click", function () {
    válasz4 = document.querySelector("#válasz4").value;
    console.log(`Válasz: ${válasz4}`);
    if (válasz4 === megoldás4) {
      document.querySelector(".helyes4").classList.remove("hidden");
      document.querySelector(".helytelen4").classList.add("hidden");
      document.getElementById("idősorkep").src = "idősormegold.jpg";
      murany2.play();
      document.querySelector(".megoldás42").classList.remove("hidden");
    } else {
      document.querySelector(".helytelen4").classList.remove("hidden");
    }
  });

// MODAL WINDOW:

document.querySelector(".button-kép1").addEventListener("click", function () {
  document.querySelector(".térkép1").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
});

document.querySelector(".close-térkép1").addEventListener("click", function () {
  document.querySelector(".térkép1").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
});
