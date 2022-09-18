window.addEventListener('DOMContentLoaded', () => {
    let click = document.querySelector('.off2')
let video = document.querySelector('.video')
let wheelsBig = document.querySelector('.video1')
let move = document.querySelector('.move')
let plus = document.querySelector('.top3')
let minus = document.querySelector('.bottom3')
let wheels = document.querySelector('.disk')
let img = document.querySelector('.img-as')
let conditioner = document.querySelector('.off')
let km = document.querySelector('.probeg')
let longRange = document.querySelector('.off1')
let gradus = document.querySelector('.temp')
let gradusPlus = document.querySelector('.top2')
let gradusMinus = document.querySelector('.bottom2')
let price = document.querySelector('.prices')
let btns = document.querySelector('.btn')
let speed = document.querySelector('.speedkm')
let topSpeed = document.querySelector('.top')
let bottomSpeed = document.querySelector('.bottom')
let a = document.querySelector('.teslasalon')
let teslaBox = document.querySelector('.tesla-box')
let minusConditioner = 50
img.onclick = () => {
    img.style.display = 'none'
    video.classList.add('activeVideo')
    teslaBox.classList.add('activeposition')
        setTimeout(() => {
            window.location.href ='file:///D:/Tesla/list2/index.html'
        }, 3000);
}
plus.onclick = () => {
    video.classList.add('videoNoActive')
    wheelsBig.classList.add('videoActive')
    wheels.innerHTML = '21'
    minus.classList.remove('btnNoActive')
    plus.classList.add('btnNoActive')
    move.classList.remove('moveActive')
    click.classList.remove('on2')
}
minus.onclick = () => {
    if (plus.classList.contains('btnNoActive')) {
        video.classList.remove('videoNoActive')
        wheelsBig.classList.remove('videoActive')
        wheels.innerHTML = '19'
        plus.classList.remove('btnNoActive')
        minus.classList.add('btnNoActive')
    }
    move.classList.remove('moveActive')
    click.classList.remove('on2')
}
minus.classList.add('btnNoActive')
click.onclick = () => {
    move.classList.toggle('moveActive')
    click.classList.toggle('on2')
}
conditioner.onclick = () => {
    conditioner.classList.toggle('on2')
    if (conditioner.classList.contains('on2')) {
        km.innerHTML = +km.innerHTML - minusConditioner
    } else {
        km.innerHTML = +km.innerHTML + minusConditioner
    }
}
longRange.onclick = () => {
    longRange.classList.toggle('on3')
    if (longRange.classList.contains('on3')) {
        price.innerHTML = '$99, 990'
    } else {
        price.innerHTML = '$89, 990'
    }
    if (longRange.classList.contains('on3')) {
        km.innerHTML = +km.innerHTML + 100
    } else {
        km.innerHTML = +km.innerHTML - 100
    }
}
let count = 20
gradusPlus.onclick = () => {
    count++
    gradusMinus.classList.remove('btnNoActive')
    gradus.innerHTML = count
    km.innerHTML = +km.innerHTML + 2
    if (count === 40) {
        count--
        km.innerHTML = +km.innerHTML - 2
        gradusPlus.classList.add('btnNoActive')
    }
}
gradusMinus.onclick = () => {
    count--
    km.innerHTML = +km.innerHTML - 2
    gradusPlus.classList.remove('btnNoActive')
    gradus.innerHTML = count
    if (count === 0) {
        count++
        km.innerHTML = +km.innerHTML + 2
        gradusMinus.classList.add('btnNoActive')
    }
}
let speedCount = 60
topSpeed.onclick = () => {
    speedCount = speedCount + 5
    bottomSpeed.classList.remove('btnNoActive')
    km.innerHTML = +km.innerHTML - 10
    speed.innerHTML = speedCount
    if (speedCount === 100) {
        speedCount = speedCount - 5
        km.innerHTML = +km.innerHTML + 10
        topSpeed.classList.add('btnNoActive')
    }
}
bottomSpeed.onclick = () => {
    speedCount = speedCount - 5
    topSpeed.classList.remove('btnNoActive')
    km.innerHTML = +km.innerHTML + 10
    speed.innerHTML = speedCount
    if (speedCount === 5) {
        speedCount = speedCount + 5
        km.innerHTML = +km.innerHTML - 10
        bottomSpeed.classList.add('btnNoActive')
    }
}
})
