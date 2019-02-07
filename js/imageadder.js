const images = [
    "Alvanon.jpg", "MavSocial.jpg", "CITAC.jpg", "MyiCellar.jpg",
    "publication1.jpg", "publication2.jpg", "publication3.jpg", "publication4.jpg"
]

let i = 0

function placeImage(x, y) {

    const nextSrc = images[i]

    const img = document.createElement("img")
    img.setAttribute("src", nextSrc)

    img.setAttribute("draggable", "false")


    img.style.left = x + "px"
    img.style.top = y + "px"
    img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)"

    document.querySelector("section.collage").appendChild(img)
    i = i + 1
    if (i >= images.length) {
        i = 0
    }
    img.classList.add("portfolio-img");
}

document.querySelector("section.collage").addEventListener("click", function (event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
})

document.querySelector("section.collage").addEventListener("touchend", function (event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
})

