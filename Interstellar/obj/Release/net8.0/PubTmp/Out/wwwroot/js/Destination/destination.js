gsap.registerPlugin(TextPlugin)

let imgDestination = document.getElementById("img-destination");
let h3Destination = document.querySelector("#h3-destination>span");

let h2Destination= document.getElementById("h2Destination");

let pDescription = document.getElementById("descriptionDestination")

let distanceTravel = document.getElementsByClassName("distance-travel");


let tl = gsap.timeline();

gsap.from(imgDestination,{
     scale:0,
     rotation:90,
     duration:3,
     ease:"power4.out",
    })


gsap.from(h2Destination,{
    rotateX:1440,
    duration:2,
    ease:"sine.out",
    scale:0
})


    document.addEventListener("DOMContentLoaded",()=>{
        let url = window.location.href.split("=");
        if(url.length==1){
            gsap.to(h3Destination,{
                duration: 2, text :"PICK YOUR DESTINATION",
            })
        }
        else{
            h3Destination.textContent = "PICK YOUR DESTINATION"
        }
    })


    document.addEventListener("DOMContentLoaded", ()=>{
        let textPDescriptions = pDescription.textContent.split(" ");
        pDescription.innerHTML = "";

        textPDescriptions.forEach(word => {
            const spanWord = document.createElement("span");
            spanWord.innerText = word;
            spanWord.style.marginRight = "0.3rem"
            spanWord.style.display = "inline-block";
            pDescription.appendChild(spanWord)
        });

        let spanWord = pDescription.querySelectorAll("span");
        gsap.from(spanWord,{
            x : 500,
            opacity: 0,
            duration:2,
            ease:"expo.out",
            stagger:0.02,
            onComplete: () => {
                gsap.to(spanWord, { opacity: 1 });
            }
        })
    })


document.addEventListener("DOMContentLoaded", ()=>{

for (let index = 0; index < distanceTravel[0].children.length; index++) {
    const element = distanceTravel[0].children[index];
        tl.from(element,{
            y : 200,
            autoAlpha: 0,
            duration: 1.2
        })
}
// body.style.overflow = ""

})