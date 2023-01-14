function t_ready(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}
t_ready(()=>{
//отложенное подключение css
try {
    const style = document.createElement('link')
    style.href = 'https://rasskazoff.github.io/tilda_scripts/Art Present/style.css'
    style.rel = 'stylesheet'
    document.head.appendChild(style)
 }catch(err){console.log(err)}
 
//фиксированное меню
try {
    const menuBlock = document.querySelector('.uc-fixMenu')
    const menu = menuBlock.querySelector('.t396__artboard')

    let menuH = window.getComputedStyle(menu).height
    menuBlock.style.height = menuH

    document.addEventListener("scroll", () => {
        if(window.pageYOffset > 333){
            menu.classList.add('fixed')
            menuBlock.classList.add('show')
            t_lazyload__init()
        }else{
            menu.classList.remove('fixed')
            menuBlock.classList.remove('show')
        }
    })
}catch(err){console.log(err)}

//бургер меню
try {
    const menu = document.querySelector('.uc-menuMob')
    const menuBlock = document.querySelector('.uc-fixMenu')
    const fixMenu = menuBlock.querySelector('.uc-fixMenu .t396__artboard')
    const menuButton = document.querySelectorAll('[href="#menu"]')
    
    menuButton.forEach((el)=>{
        el.addEventListener('click',()=>{
            menu.classList.toggle('active')
            fixMenu.classList.toggle('active')
            menuBlock.classList.toggle('show-menu')
        })
    })

}catch(err){console.log(err)}

//яндекс карта
try {
    let yaMapRender = false
    const map = document.querySelector('#map')

    const yaMapCreate = (map) => {
        const newMap = document.createElement('iframe')
        newMap.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3Adf7d39d612e3624e639363bdc26080d31d89d0bf1e3a5a6bec1b5bfefb7b0e16&amp;source=constructor'
        map.append(newMap)
        yaMapRender = true
    }

    if (map.getBoundingClientRect().top < innerHeight && map.getBoundingClientRect().top > 0){
        yaMapCreate(map)
    }else{
        document.addEventListener("scroll", () => {
            if(!yaMapRender){
                yaMapCreate(map)
            }
        })
    }
}catch(err){console.log(err)}

//анимация бордюра кнопки
try {
    setTimeout(()=>{
        const button = document.querySelectorAll('.uc-animBtn .t-submit, .animBtn .tn-atom, [class*="animBtn_"] .tn-atom')
        button.forEach((e)=>{
            e.classList.add('border__animate')
        })
    },500)
}catch(err){console.log(err)}

// попап в зеро
try {
    const zeroPopup = (popupName) => {
        const popup = document.querySelector(`[data-tooltip-hook="#${popupName}"] .t-popup__container`)
        const zero = document.querySelector(`.uc-${popupName}`)
        const button__init = document.querySelectorAll(`[href="#${popupName}"]`)

        let popupID = popup.closest('.t-rec').getAttribute('id').replace('rec','')
        zero.querySelector('[href="#close"]').addEventListener('click',()=>{
            t390_closePopup(popupID)
        })

        popup.append(zero)

        button__init.forEach((e)=>{
            e.addEventListener('click',()=>{
                setTimeout(()=>{
                    t396_init(popupID)
                    popup.querySelector('.t-submit').classList.add('border__animate')
                },500)
            })
        })
    }

    let popup__callback = 'popup__callback'
    let popup__request= 'popup__request'
    zeroPopup(popup__callback)
    zeroPopup(popup__request)

}catch(err){console.log(err)}

// показать еще
try {
    const more__hidden = document.querySelectorAll('.uc-more__hidden')
    if(more__hidden.length > 0){
        const show__more = document.querySelector('[href="#show__more"]')
        show__more.addEventListener('click',(e)=>{
            e.target.closest('.t-rec').style.display = 'none'
            more__hidden.forEach((e)=>{
                e.classList.add('show')
                t_lazyload__init()
            })
        })
    }
}catch(err){console.log(err)}

// до/после 
try {
    const slider = document.querySelector('.uc-beforeafter')
    if(slider){
        const sliderNew = document.querySelector('#beforeafter')
        sliderNew.append(slider)
        sliterId = slider.id.replace('rec','')
        t410_init(sliterId)
    }
}catch(err){console.log(err)}
})