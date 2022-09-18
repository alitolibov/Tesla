window.addEventListener('DOMContentLoaded', () => {
    let colors = {
        black: 'https://wylsa.com/wp-content/uploads/2021/01/compositor-1.jpg',
        white: 'https://moscowteslaclub.ru/upload/resize_cache/iblock/513/1266_715_2/dh1ret1h33eggu4vc4v6srboy0ub1mdp.jpg',
        brown: 'https://wylsa.com/wp-content/uploads/2021/01/compositor.jpg'
    }
    let btns = document.querySelectorAll('button[data-color]')
    let img = document.querySelector('.salon')
    let videoTesla = document.querySelector('.videoobzor')
    let on = document.querySelector('.off')
    btns.forEach(element => {
        element.onclick = () => {
            let key = element.getAttribute('data-color')
            img.style.backgroundImage = `url("${colors[key]}")`
        } 
    });
    on.onclick = () => {
        on.classList.toggle('on')
        img.classList.toggle('none')
        videoTesla.classList.toggle('block')
    }
})
