console.log('Скрипт подключен')

function t_ready(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}

t_ready(()=>{
    let shapeRotate = document.querySelector('.rotate .tn-atom')
    shapeRotate.animate([
        { transform: 'rotate(0)' },
        { transform: 'rotate(360deg)' }
    ], {
        duration: 5000,
        iterations: Infinity
    })
})