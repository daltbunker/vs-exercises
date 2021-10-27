const player = document.querySelector("#player")
const powerUp = document.querySelector(".power-up")

const interval1 = setInterval(() => {
    player.src = "images/luigi.png"
},3600)


// const interval2 = setInterval(() => {
//     player.style.backgroundImage = "url(images/luigi-fire-power.png)"
// },7200)

// clearInterval(interval)

// let interval = setInterval(() => {
//     player.style.height = "80px"
//     player.style.width = "80px"
// },3600)