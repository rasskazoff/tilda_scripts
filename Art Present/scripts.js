function t_ready(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}
t_ready(()=>{
//отложенное подключение css
try {
    const style = document.createElement('link')
    style.href = 'https://rasskazoff.github.io/tilda_scripts/Art Present/style.css'
    // style.href = 'http://127.0.0.1:8887/tilda_scripts/Art Present/style.css'
    style.rel = 'stylesheet'
    document.head.appendChild(style)
 }catch(err){console.log(err)}
 
//фиксированное меню
try {
    const menuBlock = document.querySelector('.uc-fixMenu')
    const menu = menuBlock.querySelector('.t396__artboard')

    let menuH = window.getComputedStyle(menu).height
    menuBlock.style.height = menuH
    let ready_lazyload = false

    document.addEventListener("scroll", () => {
        if(window.pageYOffset > 333){
            menu.classList.add('fixed')
            menuBlock.classList.add('show')
            if (!ready_lazyload){
                t_lazyload__init()
                ready_lazyload = true
            }
        }else{
            menu.classList.remove('fixed')
            menuBlock.classList.remove('show')
        }
    })
}catch(err){console.log(err)}

//бургер меню
try {
    const menu = document.querySelector('.uc-menuMob')
    const fixMenu = document.querySelector('.uc-fixMenu')
    const fixMenuButton = fixMenu.querySelectorAll('[href="#menu"]')
    const staticMenu = document.querySelector('.uc-staticMenu')
    const staticMenuButton = staticMenu.querySelectorAll('[href="#menu"]')
    let ready_lazyload = false

    fixMenuButton.forEach((el)=>{
        el.addEventListener('click',()=>{
            el.classList.toggle('menu--open')
            document.body.classList.toggle('no-scroll')
            menu.classList.toggle('active')
            fixMenu.classList.toggle('active')
            fixMenu.classList.toggle('show-menu')
            staticMenu.classList.toggle('openMenu')
            if (!ready_lazyload){
                t_lazyload__init()
                ready_lazyload = true
            }
        })
    })

    staticMenuButton.forEach((el)=>{
        el.addEventListener('click',()=>{
            el.classList.toggle('menu--open')
            document.body.classList.toggle('no-scroll')
            menu.classList.toggle('active')
            staticMenu.classList.toggle('active')
            staticMenu.classList.toggle('show-menu')
            if (!ready_lazyload){
                t_lazyload__init()
                ready_lazyload = true
            }
        })
    })

    menu.querySelector('.t396__filter').addEventListener('click', ()=>{
        menu.classList.remove('active')
        fixMenu.classList.remove('active')
        fixMenu.classList.remove('show-menu')
        staticMenu.classList.remove('openMenu')
        staticMenu.classList.remove('active')
        staticMenu.classList.remove('show-menu')
        document.body.classList.remove('no-scroll')
        staticMenuButton[0].classList.remove('menu--open')
        fixMenuButton[0].classList.remove('menu--open')

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
        const button__init = document.querySelectorAll(`[href^="#${popupName}"]`)

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

// получаем параметр у кнопки и перемещаем его в атрибут
try {
    const buttons = document.querySelectorAll(`[href^="#popup"]`)
    buttons.forEach((button)=>{
        let button_params = button.getAttribute('href').split('=')
        if (button_params.length > 1){
            button.href = button_params[0]
            button.dataset.params = button_params[1]
        }
    })
}catch(err){console.log(err)}

// передаем соданный параметр в форму
try {
    const buttons = document.querySelectorAll(`[data-params]`)
    buttons.forEach((button)=>{
        button.addEventListener('click', (el)=>{
            let input = document.querySelector(`[data-tooltip-hook="${el.target.getAttribute('href')}"] form [name="params"]`)
            let params = el.target.dataset.params
            input.value = params
        })
    })
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