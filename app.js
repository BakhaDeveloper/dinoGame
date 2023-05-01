const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

const jump = () => {
     if(dispatchEvent.classList != "jump") {
         dino.classList.add("jump");
         setTimeout(() => {
            dino.classList.remove("jump")
         }, 500);
     }
}

const checkAlive = setInterval(() => {
    const dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue('top')
    )
    const cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue('left')
    )
    if(cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 132) {
        dino.style.animationPlayState = 'paused';
        cactus.style.animationPlayState = 'paused';
        alert('Ooops you lost ☹️');
        window.location.reload()
    }
}, 10)

document.addEventListener("keydown", () => {
    jump()
})