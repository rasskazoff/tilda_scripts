function t_ready(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}
t_ready(()=>{
//квиз
try {
    
    if (innerWidth > 959){
        const quiz = document.querySelector('.uc-quiz')
        const quizNew = document.querySelector('#quiz')
        quizNew.append(quiz)
    }

}catch(err){console.log(err)}

//шапка
try {
    
    const menu = document.querySelector('.uc-fixMenu')
    menu.classList.add('fixed')
    menu.classList.add('pinned')

    const showMenu = ()=>{            
        if(window.pageYOffset > 333){
            setTimeout(()=>{
                menu.classList.remove('fixed')
            },100)
        }else{
            setTimeout(()=>{
                menu.classList.add('fixed')
            },100)
        }
    }
    showMenu()
    document.addEventListener('scroll',()=>{
        showMenu()
    })

}catch(err){console.log(err)}

//добавляем кнопку в карточке товара
try {
    const button = document.querySelector('.t744__btn-wrapper')
    const button__new = document.createElement('div')
    button__new.classList.add('t744__btn-wrapper')
    button__new.classList.add('t1002__btns-wrapper')
    button__new.innerHTML = '<a href="#popup:zamer" target="" class="t744__btn t-btn t-btn_sm" style="color:#ffffff;background-color:#3a588d;border-radius:10px; -moz-border-radius:10px; -webkit-border-radius:10px;"><table style="width:100%; height:100%;"><tbody><tr><td class="js-store-prod-buy-btn-txt">Бесплатный замер></td></tr></tbody></table></a>'
    button.after(button__new)
    
}catch(err){console.log(err)}

})