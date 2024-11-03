let h3Technology = document.querySelector(".h3-technology");



document.addEventListener("DOMContentLoaded", ()=>{

    let url = window.location.href;
    let arrayUrl = url.split("?")

    let widthWindows = window.innerWidth;

    if(widthWindows > 992){
        if(arrayUrl.length <= 1){
            gsap.from(h3Technology,{
                scale:0,
                ease:"sine.in",
                duration:2,
                transformOrigin: "top left"
            })
        }
    }

})

document.addEventListener("DOMContentLoaded", ()=>{
    let windowsWidth = window.innerWidth;

    let li = document.querySelectorAll(".technology ul>li");
    if(windowsWidth <= 992){
    gsap.from(li,{
        y: "-50vh",
        duration:2,
        ease:"sine.in",
    })
    }
    else{

        gsap.from(li,{
            x: "-100vw",
            duration:1,
            ease:"sine.in",
            stagger:0.5
        })
    }
})

document.addEventListener("DOMContentLoaded", ()=>{
    let contentInfoTechnology = document.getElementById("content-info-technology").children;

    gsap.from(contentInfoTechnology,{
        y: "100vh",
        duration:1,
        ease:"sine.in",
        opacity:0,
        stagger:0.5,
    })
})


document.addEventListener("DOMContentLoaded", ()=>{
    let imgContainer = document.querySelector(".containerImg")
    let windowsWidth = window.innerWidth;
    let imgTechnology = document.querySelectorAll(".cuadrante");
    let img = imgTechnology[0].style.backgroundImage;


    if(windowsWidth <= 992){
        for (let index = 0; index < imgTechnology.length; index++) {
            imgContainer.removeChild(imgTechnology[index]);
            
        }
        let divImg = document.createElement("div")
        divImg.style.backgroundImage = img
        divImg.style.backgroundSize = "cover";
        divImg.style.backgroundOrigin = "center";
        divImg.style.backgroundRepeat = "no-repeat";
        
        divImg.classList.add("cuadrante")
        imgContainer.appendChild(divImg)
        // imgContainer.innerHTML = `<div class="cuadrante cuadrante1" style="background-image: ${img};"></div>`
    }
    else{
        gsap.from(imgTechnology,{
            x: "50vw",
            // scale:0,
            duration:0.8,
            opacity:0,
            ease:"sine.in",
            stagger: 0.4
        })
    }
})
