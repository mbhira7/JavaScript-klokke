const main = document.querySelector("main");
const sekundviser = document.querySelector(".sekundviser");
const minuttviser = document.querySelector("#minuttviser");
const timeviser = document.querySelector("#timeviser");
const tittel = document.querySelector("#tittel");
const digitalklokke = document.querySelector("#digitalklokke");
const datoDisplay = document.querySelector("#datoDisplay");

function bevegVisere () {
    const dato = new Date();
    const sekund = dato.getSeconds();
    const minutt = dato.getMinutes();
    const time = dato.getHours();

    const sekundDeg = 6*sekund
    const timeDeg = time*30 + minutt/2

    if(sekundDeg === 0) {
        sekundviser.style.transition = "none"
    }
    else{
        sekundviser.style.transition = "0.05s"
        sekundviser.style.transitionTimingFunction = "cubic-bezier(0, 2.21, 0.58, 1)"
    }
    
    sekundviser.style.transform = `rotate(${sekundDeg}deg)`; 
    timeviser.style.transform = `rotate(${timeDeg}deg)`;
    minuttviser.style.transform = `rotate(${minutt*6}deg)`;
}

setInterval(bevegVisere, 1000);
bevegVisere()

for(let i=0; i<60; i++) {
    const bredde = "3px";
    const hoyde = "15px"
    const rotasjon = i * 6 + "deg";
    const avstand = 250 + "px";

    if(i % 5 === 0) {

        const div = document.createElement("div");
        div.style.transform =  `rotate(${rotasjon}) translateY(${avstand})`;
        div.style.width = bredde;
        div.style.height = hoyde;

        main.appendChild(div);
    }

    if(rotasjon==="0deg") {
        const heading1 = document.createElement("h4");
        heading1.innerText = "3"
        heading1.id = "tre";
        main.appendChild(heading1);   
    }

    if(rotasjon==="90deg") {
        const heading2 = document.createElement("h4");
        heading2.innerText = "9"
        heading2.id = "ni";
        main.appendChild(heading2);   
    }

    if(rotasjon==="180deg") {
        const heading3 = document.createElement("h4");
        heading3.innerText = "12"
        heading3.id = "tolv";
        main.appendChild(heading3);   
    }

    if(rotasjon==="270deg") {
        const heading4 = document.createElement("h4");
        heading4.innerText = "6"
        heading4.id = "seks";
        main.appendChild(heading4);   
    }
    
    const div = document.createElement("div");
    div.style.transform =  `rotate(${rotasjon}) translateY(${avstand})`;
    main.appendChild(div);

}

const maaneder = ["Januar","Februar","Mars","April","Mai","Juni","Juli","August",
"September","Oktober","November","Desember"]

const dager = ["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"]

function visDigitalTid() {
    const d = new Date();
    const dato = d.getDate()
    const maaned = maaneder[d.getMonth()]
    const dag = dager[d.getDay()]
    const aar = d.getFullYear()
    const s = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
    const m = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    const t = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
    const fullDato = dag+ " " + dato + ". " + maaned + " "+ aar 

    digitalklokke.innerHTML = t + " : " + m + " : " + s; 
    datoDisplay.innerHTML = fullDato; 

}

setInterval(visDigitalTid,1000);
visDigitalTid();


        
        
