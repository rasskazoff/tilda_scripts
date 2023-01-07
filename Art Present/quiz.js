function t_ready(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}
t_ready(()=>{
//отложенное подключение css
try {
    const style = document.createElement('link')
    style.href = 'https://rasskazoff.github.io/tilda_scripts/Art Present/quiz.css'
    style.rel = 'stylesheet'
    document.head.appendChild(style)
 }catch(err){console.log(err)}
/* калькулятор */
try {
    const title = document.querySelectorAll('.uc-quiz .t-input-title')
    title.forEach((e,i)=>{
        let div = document.createElement('div')
        div.classList.add('step__wrap')
        div.innerHTML = `<div class="step">${i+1}</div>`
        e.prepend(div)
    })
    
    let step__size = document.querySelector('.uc-quiz [name="size"]')
    step__size = step__size.closest('.t-input-group')
    step__size.classList.add('step__size')
    
    let step__frame = document.querySelector('.uc-quiz [name="frame"]')
    step__frame = step__frame.closest('.t-input-group')
    step__frame.classList.add('step__frame')
    
    const btn_wrapper = document.querySelector('.uc-quiz .t862__btn-wrapper')
    const btn_next = document.querySelector('.uc-quiz .t862__btn_next')
    const btn_result = document.querySelector('.uc-quiz .t862__btn_result')
    const btn_submit = document.querySelector('.uc-quiz .t-submit')
    
    let observer = new MutationObserver(mutationRecords => {
        if (btn_next.style.display == 'none' && btn_result.style.display == 'none'){
            btn_wrapper.classList.add('fixed-top')
        }else{
            btn_wrapper.classList.remove('fixed-top')
        }
    });
    observer.observe(btn_result, {
        attributes: true
    });
    
    btn_next.classList.add('border__animate')
    btn_result.classList.add('border__animate')
    btn_submit.classList.add('border__animate')
    
    //загрузка файла
    setTimeout(()=>{
        //const upload_button = document.querySelector('.uc-quiz .t-upwidget-container__button')
        const upload_button = document.querySelector('.uc-quiz .uploadcare--widget__button')
        const upload_button_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12H16" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16V8" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        upload_button.innerHTML = `${upload_button_icon} Перетащите или загрузите фото (параметры)`
    },500)
    
    //иконка закрытия внутри окна
    for (let e = 0; e < document.querySelectorAll(".t862").length; e++) {
        let t = document.querySelectorAll(".t862 .t-popup__close")[e],
            n = t.cloneNode(!0);
        document.querySelectorAll(".t862 .t-popup__container")[e].append(n),
            n.addEventListener(
                "click",
                function () {
                    t.click();
                },
                !1
            );
    }
    
    /* шаг даты */
    const date = document.querySelector('.t-datepicker__wrapper')
    let date__icon = document.createElement('div')
    date__icon.classList.add('date__icon')
    date__icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path opacity="0.4" d="M33.3333 16.4004C34.25 16.4004 35 17.1504 35 18.0671V28.3337C35 33.3337 32.5 36.6671 26.6667 36.6671H13.3333C7.5 36.6671 5 33.3337 5 28.3337V18.0671C5 17.1504 5.75 16.4004 6.66667 16.4004H33.3333Z" fill="#FF823A"/><path d="M27.9164 5.93398V3.33398C27.9164 2.65065 27.3497 2.08398 26.6664 2.08398C25.9831 2.08398 25.4164 2.65065 25.4164 3.33398V5.83398H14.5831V3.33398C14.5831 2.65065 14.0164 2.08398 13.3331 2.08398C12.6497 2.08398 12.0831 2.65065 12.0831 3.33398V5.93398C7.58308 6.35065 5.39973 9.03398 5.0664 13.0173C5.03306 13.5006 5.43306 13.9006 5.89973 13.9006H34.0998C34.5831 13.9006 34.9831 13.484 34.9331 13.0173C34.5998 9.03398 32.4164 6.35065 27.9164 5.93398Z" fill="#FF823A"/><path d="M26.0998 30.7833L24.8665 29.55C25.4998 28.5834 25.8831 27.4167 25.8831 26.1667C25.8831 22.7667 23.1165 20 19.7165 20C16.3165 20 13.5498 22.7667 13.5498 26.1667C13.5498 29.5667 16.3165 32.3333 19.7165 32.3333C20.9665 32.3333 22.1331 31.95 23.0998 31.3167L24.3331 32.55C24.5831 32.8 24.8998 32.9167 25.2165 32.9167C25.5331 32.9167 25.8498 32.8 26.0998 32.55C26.5831 32.0667 26.5831 31.2667 26.0998 30.7833Z" fill="#FF823A"/></svg>'
    date.prepend(date__icon)

    /* переход на следующий шаг при выборе варианта */
    const radio = document.querySelectorAll('.uc-quiz .t-input-group [type="radio"]')
    radio.forEach((el)=>{
        el.addEventListener('change', ()=>{
            setTimeout(()=>{ btn_next.click() }, 200)
        })
    })
}catch(err){console.log(err)}
})