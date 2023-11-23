/*
Úkoly v tomto cvičení:

1) JavaScriptem změň text nadpisu.*/
	
const headlineText = document.querySelector("#nadpis")
headlineText.textContent = "Změna nadpisu H1"

/*2) JavaScriptem změnit barvu nadpisu.
	 (CSS vlastnost: color)*/

const headlineColor = document.querySelector("#nadpis")
headlineColor.style.color = "#3cb371"

/*3) Zvětšit velikost písma odstavce a/nebo ho udělat tučně nebo kurzívou.
	 (CSS vlastnosti: font-size, font-weight, font-style)*/

const fontProperties = document.querySelector("p")
fontProperties.style.fontStyle = "italic"
fontProperties.style.fontWeight = "700"


/*4) Vyměnit obrázek kočky za psa. Koček je všude dost, nepotřebujeme tu další.
	 (HTML atribut: src)*/

const imageSrc = document.getElementById("foto");
imageSrc.src = "pes.jpg"

/*5) Přesunout čtvereček na jiné místo nebo ho otočit.
	 (nastav CSS vlastnost position na hodnotu 'absolute' a pak můžeš měnit
	 pozici prvku pomocí CSS vlastností top a left)*/

	 const squarePosition = document.querySelector(".ctverecek")
	 squarePosition.style.position = "absolute"
	 squarePosition.style.left = "33%"
	 squarePosition.style.top = "75%"

/*6) Vytvoř v CSS třídu s nějakými CSS vlastnostmi a zkuš ji přidat na libovolný
	 prvek na stránce.
	 (v CSS nastav třídě třeba barvu pozadí.)*/

const paragraphChange = document.querySelector("paragraph");
paragraphChange.style.backgroundColor = "pink"

/*Nápověda:
- V HTML přidej k elementu atribut id="neco" a nějak si prvek pojmenuj, aby se ti lépe vybíral
- V JavaScriptu najdi daný HTML element pomocí document.querySelector("#neco") a ulož si ho
	do proměnné, se kterou budeš nadále pracovat
- Text prvku změníš pomocí prvek.textContent = "hodnota";
- HTML atributy nalezeného prvku změníš pomocí prvek.attribut = "hodnota";
- CSS vlastnosti nalezeného prvku změníš pomocí prvek.style.cssVlastnost = "hodnota";
- Vzpomeň si, jak se jmenují CSS vlastnosti pro barvu, písmo, atd.
	Víceslovné názvy vlastností (ty s pomlčkou) přepíšu v JavaScriptu do tzv. camelCase.
	Např. z background-color v CSS se v JavaScriptu stane backgroundColor.
- CSS třídy můžeš na elementy přidávat pomocí prvek.classList.add = "csstrida";
  Třídy můžeš z elementu i odebrat pomocí metody remove nebo přepínat třídu metodou toggle.
*/

// tady je místo pro tvůj program

