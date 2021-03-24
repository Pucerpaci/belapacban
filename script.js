"use strict";

let murany1 = document.getElementById("murany1");
let murany2 = document.getElementById("murany2");

let kódválasz;
let kód = "1235-1270";

document.querySelector(".btn-kezdés").addEventListener("click", function () {
  kódválasz = document.querySelector("#kód").value;
  console.log(`Válasz: ${kódválasz}`);
  if (kód === kódválasz) {
    document.querySelector(".első").classList.remove("hidden");
    document.querySelector(".bevezető").classList.add("hidden");
    document.querySelector(".menü").classList.remove("hidden");
    document.querySelector(".btn-menü-első").classList.remove("hidden");
  }
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
      "Egy 1246. január 10-én kelt királyi oklevélben szerepel először Fülek, annak kapcsán, hogy a várat és tartozékait IV. Béla elkobozza akkori garázdálkodó urától, a Kacsics nemzetségbeli Folkustól (Fulkó), s odaajándékozza a Pok nemzetségből származó Móricnak. Fulkó a tatárjárás idején haranggal csalogatta magához a tatárok elől menekülőket, akiket aztán kirabolt és megölt. Tény, hogy meggyilkolta a rokonát is, amiért aztán a király (istenítéletként) párbajra ítélte, de barátai közbenjárására kegyelmet kapott. Ennek ellenére folytatta a gaztetteit; hamis pénzt veretett, a királyt sértegette, aki mindezt megelégelve arra ítélte, hogy meztelenül párbajozzon egy harcossal. Fulkó azonban a börtöntársával megölte az őröket és megszökött. Magányosan élt, amíg öngyilkosságot nem követett el.";
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
  .querySelector(".btn-tovább-negyedik2")
  .addEventListener("click", function () {
    document.querySelector(".ötödik").classList.remove("hidden");
    document.querySelector(".negyedik").classList.add("hidden");
    document.querySelector(".harmadik").classList.add("hidden");
    document.querySelector(".első").classList.add("hidden");
    document.querySelector(".második").classList.add("hidden");
    document.querySelector(".btn-menü-ötödik").classList.remove("hidden");
    document.querySelector(".merrekirályleír").textContent =
      "Területe ősidők óta lakott, a város határában későbronzkori leletekre bukkantak. A mai települést tatárjárás után ide telepített németek alapították. 1265-ben említik először IV. Béla oklevelében. Kiváltságait 1380-ban Nagy Lajos királytól kapta, ekkor Brizna néven említik. 1488-ban vásártartási jogot kapott. 1517-ben a zólyomlipcsei Dóczyak felégették. Fejlődését különösen a bányászat segítette elő. 1655-ben szabad királyi város lett, de ezt a címét 1770-ben elveszítette. A 17. században sorra alakultak iparos céhei, majd a 18. századtól vasipara indult fejlődésnek. 1779-ben nagy tűzvész pusztította, melyben a belváros épületeinek nagy része leégett.";
    document.querySelector(".merrecím").textContent = "Breznóbánya";
    document.getElementById("merrekép").src = "brezno_2.jpg";
  });

document
  .querySelector(".btn-tovább-ötödik")
  .addEventListener("click", function () {
    document.querySelector(".hatodik").classList.remove("hidden");
    document.querySelector(".ötödik").classList.add("hidden");
    document.querySelector(".negyedik").classList.add("hidden");
    document.querySelector(".harmadik").classList.add("hidden");
    document.querySelector(".első").classList.add("hidden");
    document.querySelector(".második").classList.add("hidden");
    document.querySelector(".btn-menü-hatodik").classList.remove("hidden");
    document.querySelector(".merrekirályleír").textContent =
      "Liptóújvár környéke már a bronzkorban is lakott volt, a lausitzi kultúra temetői kerültek elő. Először 1262-ben említik castro Lippo néven, majd 1341-ben Ujwar, 1360-ban Haraduk, 1476-ban Novum castrum, 1503-ban castrum Hradek alakban említik a korabeli források. Királyi vár volt, majd birtokosai gyakran változtak. 1433-ban elfoglalták a husziták. 1441-ben Rikolf, 1450-ben a Komorovszky, 1453-ban a Pongrácz család, 1462-ben Szapolyai István lett a birtokosa. A Szapolyaiak egészen 1527-ig birtokolták a várat, mely ekkor a Thurzóké lett. 1528-ban Batthyány Ferenc, 1533-ban Pekry Lőrinc, 1554-ben Balassa János, 1601-ben Sándorffy Miklós, 1604-ben Pogrányi Benedek, 1623-ban Osztrosics István, 1671-ben a király, 1703-ban Liechtenstein János, majd halála után újra a király volt a birtokosa. 1709-ben már rom volt.";
    document.querySelector(".merrecím").textContent = "Liptóújvár";
    document.getElementById("merrekép").src = "lipto_2.jpg";
  });

document
  .querySelector(".btn-tovább-hatodik")
  .addEventListener("click", function () {
    document.querySelector(".vége").classList.remove("hidden");
    document.querySelector(".hatodik").classList.add("hidden");
    document.querySelector(".ötödik").classList.add("hidden");
    document.querySelector(".negyedik").classList.add("hidden");
    document.querySelector(".harmadik").classList.add("hidden");
    document.querySelector(".első").classList.add("hidden");
    document.querySelector(".második").classList.add("hidden");
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
    document.querySelector(".hatodik").classList.add("hidden");
    document.querySelector(".vége").classList.add("hidden");
  });

document.querySelector(".btn-menü-első").addEventListener("click", function () {
  document.querySelector(".első").classList.remove("hidden");
  document.querySelector(".bevezető").classList.add("hidden");
  document.querySelector(".második").classList.add("hidden");
  document.querySelector(".harmadik").classList.add("hidden");
  document.querySelector(".negyedik").classList.add("hidden");
  document.querySelector(".ötödik").classList.add("hidden");
  document.querySelector(".hatodik").classList.add("hidden");
  document.querySelector(".vége").classList.add("hidden");
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
    document.querySelector(".hatodik").classList.add("hidden");
    document.querySelector(".vége").classList.add("hidden");
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
    document.querySelector(".hatodik").classList.add("hidden");
    document.querySelector(".vége").classList.add("hidden");
    document.querySelector(".merrekirályleír").textContent =
      "Egy 1246. január 10-én kelt királyi oklevélben szerepel először Fülek, annak kapcsán, hogy a várat és tartozékait IV. Béla elkobozza akkori garázdálkodó urától, a Kacsics nemzetségbeli Folkustól (Fulkó), s odaajándékozza a Pok nemzetségből származó Móricnak. Fulkó a tatárjárás idején haranggal csalogatta magához a tatárok elől menekülőket, akiket aztán kirabolt és megölt. Tény, hogy meggyilkolta a rokonát is, amiért aztán a király (istenítéletként) párbajra ítélte, de barátai közbenjárására kegyelmet kapott. Ennek ellenére folytatta a gaztetteit; hamis pénzt veretett, a királyt sértegette, aki mindezt megelégelve arra ítélte, hogy meztelenül párbajozzon egy harcossal. Fulkó azonban a börtöntársával megölte az őröket és megszökött. Magányosan élt, amíg öngyilkosságot nem követett el.";
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
    document.querySelector(".hatodik").classList.add("hidden");
    document.querySelector(".vége").classList.add("hidden");
    document.querySelector(".merrekirályleír").textContent =
      "Murány várát mint királyi védvárat a 13. században a Murányi-fennsík peremén 935 m magasságban található Cigánka nevű kőszirtre építették. A 16. század első felében Bacsó Mátyás rablólovag kezére jutott, akit 1549-ben kivégeztek. A legnagyobb fellendülését a szépségének köszönhetően Murányi Vénusznak elnevezett Széchy Mária élete alatt érte el. A várat abban az időben fényűzően átalakították és falai között a magyar nemesség élénk társadalmi életet folytatott. Sőt a gyönyörű és bátor Mária I. Leopold király ellen is védte a várat azonban ő sem tudta megakadályozni annak elfoglalását 1670-ben. 1702-ben a vár leégett és csak részben volt kényszerhelyzetben felújítva. A 18. században a vár kétszer kiégett és a 18. század végén már lakatlan volt. Murány vára jelenleg várrom - fennmaradt területtel és bejárati toronnyal. A vár-együttes 360 és 96 m kiterjedésű területet foglal el. Fennmaradt a gótikus palota alapzata, a körfal- és néhány melléképület-maradvány. A legjobb állapotban a tornyos bejárati kapu található.";
    document.querySelector(".merrecím").textContent = "Murány vára";
    document.getElementById("merrekép").src = "murány2.jpg";
  });

document
  .querySelector(".btn-menü-ötödik")
  .addEventListener("click", function () {
    document.querySelector(".negyedik").classList.add("hidden");
    document.querySelector(".ötödik").classList.remove("hidden");
    document.querySelector(".harmadik").classList.add("hidden");
    document.querySelector(".második").classList.add("hidden");
    document.querySelector(".első").classList.add("hidden");
    document.querySelector(".bevezető").classList.add("hidden");
    document.querySelector(".hatodik").classList.add("hidden");
    document.querySelector(".vége").classList.add("hidden");
    document.querySelector(".merrekirályleír").textContent =
      "Területe ősidők óta lakott, a város határában későbronzkori leletekre bukkantak. A mai települést tatárjárás után ide telepített németek alapították. 1265-ben említik először IV. Béla oklevelében. Kiváltságait 1380-ban Nagy Lajos királytól kapta, ekkor Brizna néven említik. 1488-ban vásártartási jogot kapott. 1517-ben a zólyomlipcsei Dóczyak felégették. Fejlődését különösen a bányászat segítette elő. 1655-ben szabad királyi város lett, de ezt a címét 1770-ben elveszítette. A 17. században sorra alakultak iparos céhei, majd a 18. századtól vasipara indult fejlődésnek. 1779-ben nagy tűzvész pusztította, melyben a belváros épületeinek nagy része leégett.";
    document.querySelector(".merrecím").textContent = "Breznóbánya";
    document.getElementById("merrekép").src = "brezno_2.jpg";
  });

document
  .querySelector(".btn-menü-hatodik")
  .addEventListener("click", function () {
    document.querySelector(".hatodik").classList.remove("hidden");
    document.querySelector(".negyedik").classList.add("hidden");
    document.querySelector(".ötödik").classList.add("hidden");
    document.querySelector(".harmadik").classList.add("hidden");
    document.querySelector(".második").classList.add("hidden");
    document.querySelector(".első").classList.add("hidden");
    document.querySelector(".bevezető").classList.add("hidden");
    document.querySelector(".vége").classList.add("hidden");
    document.querySelector(".merrekirályleír").textContent =
      "Liptóújvár környéke már a bronzkorban is lakott volt, a lausitzi kultúra temetői kerültek elő. Először 1262-ben említik castro Lippo néven, majd 1341-ben Ujwar, 1360-ban Haraduk, 1476-ban Novum castrum, 1503-ban castrum Hradek alakban említik a korabeli források. Királyi vár volt, majd birtokosai gyakran változtak. 1433-ban elfoglalták a husziták. 1441-ben Rikolf, 1450-ben a Komorovszky, 1453-ban a Pongrácz család, 1462-ben Szapolyai István lett a birtokosa. A Szapolyaiak egészen 1527-ig birtokolták a várat, mely ekkor a Thurzóké lett. 1528-ban Batthyány Ferenc, 1533-ban Pekry Lőrinc, 1554-ben Balassa János, 1601-ben Sándorffy Miklós, 1604-ben Pogrányi Benedek, 1623-ban Osztrosics István, 1671-ben a király, 1703-ban Liechtenstein János, majd halála után újra a király volt a birtokosa. 1709-ben már rom volt.";
    document.querySelector(".merrecím").textContent = "Liptóújvár";
    document.getElementById("merrekép").src = "lipto_2.jpg";
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

let válasz42;
let megoldás42 = "1215";

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

document
  .querySelector(".btn-ellenőrzés-negyedik2")
  .addEventListener("click", function () {
    válasz42 = document.querySelector("#válasz42").value;
    console.log(`Válasz: ${válasz42}`);
    if (válasz42 === megoldás42) {
      document.querySelector(".helyes42").classList.remove("hidden");
      document.querySelector(".helytelen42").classList.add("hidden");
      document.querySelector(".megoldás42").classList.remove("hidden");
    } else {
      document.querySelector(".helytelen42").classList.remove("hidden");
    }
  });

document
  .querySelector(".btn-zenebeidősor1")
  .addEventListener("click", function () {
    murany1.play();
  });

document
  .querySelector(".btn-zenebeidősor2")
  .addEventListener("click", function () {
    murany2.play();
  });

// MODAL WINDOW:

document
  .querySelector(".btn-segítség10")
  .addEventListener("click", function () {
    segítség = document.querySelector(".segítség10");
    openModal();
  });
document
  .querySelector(".btn-segítség11")
  .addEventListener("click", function () {
    segítség = document.querySelector(".segítség11");
    openModal();
  });
document
  .querySelector(".btn-segítség12")
  .addEventListener("click", function () {
    segítség = document.querySelector(".segítség12");
    openModal();
  });

document
  .querySelector(".close-segítség10")
  .addEventListener("click", function () {
    document.querySelector(".segítség10").classList.add("hidden");
    overlay.classList.add("hidden");
  });
document
  .querySelector(".close-segítség11")
  .addEventListener("click", function () {
    document.querySelector(".segítség11").classList.add("hidden");
    overlay.classList.add("hidden");
  });
document
  .querySelector(".close-segítség12")
  .addEventListener("click", function () {
    document.querySelector(".segítség12").classList.add("hidden");
    overlay.classList.add("hidden");
  });

// ------------------------- 5. FELADAT -------------------------------

let válasz5;
let megoldás5 = "Liptóújvár";

document
  .querySelector(".btn-ellenőrzés-ötödik")
  .addEventListener("click", function () {
    válasz5 = document.querySelector("#válasz5").value;
    console.log(`Válasz: ${válasz5}`);
    if (válasz5 === megoldás5) {
      document.querySelector(".helyes5").classList.remove("hidden");
      document.querySelector(".helytelen5").classList.add("hidden");
    } else {
      document.querySelector(".helytelen5").classList.remove("hidden");
    }
  });

// MODAL WINDOW:

document
  .querySelector(".btn-segítség13")
  .addEventListener("click", function () {
    segítség = document.querySelector(".segítség13");
    openModal();
  });
document
  .querySelector(".btn-segítség14")
  .addEventListener("click", function () {
    segítség = document.querySelector(".segítség14");
    openModal();
  });
document
  .querySelector(".btn-segítség15")
  .addEventListener("click", function () {
    segítség = document.querySelector(".segítség15");
    openModal();
  });

document
  .querySelector(".close-segítség13")
  .addEventListener("click", function () {
    document.querySelector(".segítség13").classList.add("hidden");
    overlay.classList.add("hidden");
  });
document
  .querySelector(".close-segítség14")
  .addEventListener("click", function () {
    document.querySelector(".segítség14").classList.add("hidden");
    overlay.classList.add("hidden");
  });
document
  .querySelector(".close-segítség15")
  .addEventListener("click", function () {
    document.querySelector(".segítség15").classList.add("hidden");
    overlay.classList.add("hidden");
  });

// ------------------------- 6. FELADAT -------------------------------

let válasz6;
let megoldás6 = "Znióváralja";

document
  .querySelector(".btn-ellenőrzés-hatodik")
  .addEventListener("click", function () {
    válasz6 = document.querySelector("#válasz6").value;
    console.log(`Válasz: ${válasz6}`);
    if (válasz6 === megoldás6) {
      document.querySelector(".helyes6").classList.remove("hidden");
      document.querySelector(".helytelen6").classList.add("hidden");
    } else {
      document.querySelector(".helytelen6").classList.remove("hidden");
    }
  });

document.querySelector(".btn-kulcs").addEventListener("click", function () {
  document.querySelector(".kulcskép").classList.remove("hidden");
});

document
  .querySelector(".close-kulcskép")
  .addEventListener("click", function () {
    document.querySelector(".kulcskép").classList.add("hidden");
  });

// MODAL WINDOW:

document
  .querySelector(".btn-segítség16")
  .addEventListener("click", function () {
    segítség = document.querySelector(".segítség16");
    openModal();
  });
document
  .querySelector(".btn-segítség17")
  .addEventListener("click", function () {
    segítség = document.querySelector(".segítség17");
    openModal();
  });
document
  .querySelector(".btn-segítség18")
  .addEventListener("click", function () {
    segítség = document.querySelector(".segítség18");
    openModal();
  });

document
  .querySelector(".close-segítség16")
  .addEventListener("click", function () {
    document.querySelector(".segítség16").classList.add("hidden");
    overlay.classList.add("hidden");
  });
document
  .querySelector(".close-segítség17")
  .addEventListener("click", function () {
    document.querySelector(".segítség17").classList.add("hidden");
    overlay.classList.add("hidden");
  });
document
  .querySelector(".close-segítség18")
  .addEventListener("click", function () {
    document.querySelector(".segítség18").classList.add("hidden");
    overlay.classList.add("hidden");
  });
