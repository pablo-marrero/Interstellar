


let buttonExplore = document.querySelector(".button-explore");

    let buttonWidth = buttonExplore.offsetLeft;

    gsap.to(buttonExplore,{
        backgroundPosition: 360,
        duration:100,
        repeat:-1,
        ease: "power1.out",
        yoyo:true
    })


   

document.addEventListener("DOMContentLoaded",()=>{
    if(window.innerWidth >= 1440){

        let span = document.createElement("span")
        span.innerHTML = `<span class="luna rounded-circle"></span>`
        
        document.querySelector(".section-home>section:last-child").appendChild(span)

console.log(document.querySelector(".section-home>section:last-child"))

        gsap.from(span,{
            x: - (buttonExplore.offsetLeft + 25),
            scale: 0.4,
            duration:25
        })

        gsap.to(span, {
            keyframes: {
                "0%":{
                    x: - (buttonExplore.offsetLeft + 200),
                    scale: 0.5,
                },
                "25%":{
                    x: (buttonWidth / 4),
                    scale: 0.3,
                    zIndex:10
                },
                "40%":{
                    x: (buttonWidth / 6),
                    scale: 0.6,
                    zIndex:15
                },
                "65%":{
                    x: - (buttonWidth),
                    scale: 0.8,
                    zIndex:15
                },
                "75%":{
                    x:  -(buttonWidth +300),
                    scale: 1,
                    zIndex:15
                },
                "100%":{
                    x: - (buttonWidth+ 200),
                    scale: 0.5,
                },
                ease: 'none', // ease the entire keyframe block
            },
            duration: 50,
            repeat:-1,
        })
    }
})

 
//     buttonExplore.addEventListener("click", ()=>{
// })


