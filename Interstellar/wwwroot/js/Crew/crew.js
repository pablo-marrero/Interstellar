gsap.registerPlugin(TextPlugin)


gsap.from("#imgCrew",{
    duration: 3,    // Duración de la animación
    bottom: "-100%",   // Mover la imagen hacia la parte superior
    ease: "power1.inOut"
})

let h3 = document.getElementById("divH3");

document.addEventListener("DOMContentLoaded",()=>{
    let urlCrew = window.location.href.split("?");

    if(urlCrew.length <= 1){

        let arrayh3 = h3.textContent.split("")
        
        h3.innerHTML = ""
        
        arrayh3.forEach(element => {
        let spanCrew = document.createElement("span");
        spanCrew.textContent = element;
        h3.appendChild(spanCrew)
    })
    
    let spanH3 = h3.querySelectorAll("span");
    
    gsap.from(spanH3,{
        scale:0,
        duration:3,
        opacity:0,
        ease:"slow(0.5, 0.8, true)",
        stagger:0.05, 
        onComplete: () => {
            gsap.to(spanH3, { opacity: 1 });
        }
    })
    }
})


document.addEventListener("DOMContentLoaded", () => {
    const pCrew = document.getElementById("pCrew");
    let textPCrew = pCrew.innerText; 
    pCrew.innerText = "";
    gsap.fromTo(pCrew, 
        { y: -80, opacity: 0 }, // Comienza movido hacia arriba y invisible
        {
            y: -50,                // Termina en su posición original
            opacity: 1,          // Termina visible
            duration: 2,       // Duración de la animación
            ease: "power1.inOut",// Suavizado de la animación
            stagger: {
                amount: 5,      // Retraso total de la animación
                from: 4,
                grid:"auto"    // Comienza desde el principio
            },
            text: textPCrew
        }
    );
});

document.addEventListener("DOMContentLoaded",()=>{
    let t1 = gsap.timeline()
    let h2Crew = document.getElementById("h2Crew")

    let letterH2 = h2Crew.textContent.split("");

    h2Crew.textContent = ""

    letterH2.forEach(element => {
        let span = document.createElement("span");
        span.textContent = element
        if(element === element.toUpperCase() && element !== letterH2[0]){
            span.style.marginLeft = "1%"
        }
        h2Crew.appendChild(span);
    });

    let spanH2 = h2Crew.querySelectorAll("span");

    spanH2.forEach(element=>{
        t1.from(element,{
            x: Math.random() * 400 - 200, // Mover horizontalmente entre -100 y 100
            y: Math.random() * 400 - 200, 
            opacity: 0.5,
            duration: 0.18,
            ease:"power1.out"
        })
    })
})

document.addEventListener("DOMContentLoaded",()=>{
    bioCrew = document.getElementById("bioCrew")

    textBrioCrew = bioCrew.innerText
    bioCrew.innerText=""

    gsap.to("#bioCrew",{
        duration:3,
        text: textBrioCrew,
    })
})
