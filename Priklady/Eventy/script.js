/*
EVENT LISTENERY
const odstavec = document.querySelector("#odstavec")
const body = document.querySelector("body")

const priKliknuti = () => {
    odstavec.classList.add("cervena")
    odstavec.classList.toggle("zlate-pozadi")
}

odstavec.addEventListener("click", priKliknuti)
odstavec.addEventListener("mouseover", () => {
    odstavec.classList.add("vetsi-pismo")
})
body.addEventListener("keydown", (kocicka) => {
    console.log(kocicka.key)

    if(kocicka.key === "ArrowDown") {
        odstavec.classList.toggle("zlate-pozadi")
    }
})

*/ 

/*
Kratší:
const priKliknuti = (e) => {
    e.target.classList.toggle("ohraniceni")
}

const odstavec = document.querySelector("#odstavec")
const odstavec2 = document.querySelector("#odstavec1")
const odstavec3 = document.querySelector("#odstavec2")

odstavec.addEventListener("click", priKliknuti)
odstavec2.addEventListener("click", priKliknuti)
odstavec3.addEventListener("click", priKliknuti)

Delší:
odstavec.addEventListener("click", (e) => {
    odstavec.classList.toggle("ohraniceni")
})
odstavec2.addEventListener("click", (e) => {
    odstavec2.classList.toggle("ohraniceni")
})
odstavec3.addEventListener("click", (e) => {
    odstavec3.classList.toggle("ohraniceni")
})
 */

/*
Úkoly v tomto cvičení:
1) Při kliknutí myší na čtvereček ho otoč o 45 stupňů.
	 Budeš potřebovat událost click, vybrat čtvereček
	 na stránce a změnit mu příslušné vlastnosti.
	 
2) Zkus čtvereček při druhém kliknutí zase vrátit zpátky.
	 Buď si musíš někde poznačit, je-li čtvereček otočený nebo ne
	 a podle toho mu správně měnit vlastnosti.
	 Nebo můžeš otočení čtverečku nastavit v CSS třídě, kterou budeš
	 na element přidávat nebo z něho odebírat. Když použijet pro
	 přepínání třídy metodu toggle, máš vše skoro bez práce.
	 Vyber si postup, který tobě připadá nejlépe pochopitelný.

3) Při stisknutí klávesy změň čtverečku barvu.
	 Budeš potřebovat událost keydown. Mysli na to, že tyto události
	 nelze nastavovat konkrétním elementům, ale musíš je nastavit pro
	 celou stránku na elementu <body>. (Je to logické. Jak bys stiskla
	 klávesu jen nad konkrétním elementem?)

	 Pokud chceš reagovat na konkrétní klávesu (a ne na stisk libovolné),
	 budeš si muset do obslužné funkce pro událost předat i objekt event,
	 který má vlastnost key, ve které je kód stisknuté klávesy.
*/

// tady je místo pro tvůj program

const rotate = document.querySelector(".ctverecek")
const priKliknuti = () => {
	 rotate.classList.toggle("otoc")
 }

rotate.addEventListener("click", priKliknuti)
document.body.addEventListener("keydown", () => {
	rotate.style.backgroundColor = "pink"
})