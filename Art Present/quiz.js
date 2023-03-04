function t_ready(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}
t_ready(()=>{
//отложенное подключение css
try {
    const style = document.createElement('link')
    style.href = 'https://rasskazoff.github.io/tilda_scripts/Art Present/quiz.css'
    // style.href = 'http://127.0.0.1:8887/tilda_scripts/Art Present/quiz.css'
    style.rel = 'stylesheet'
    document.head.appendChild(style)
 }catch(err){console.log(err)}
/* калькулятор */
try {
    // ставим порядковый номер на все шаги кроме isframe
    const quiz = document.querySelector('.uc-quiz')
    const quiz_wrapper = quiz.querySelector('.t862__wrapper')
    const btn_wrapper = quiz.querySelector('.t862__btn-wrapper')
    const btn_next = quiz.querySelector('.t862__btn_next')
    const btn_prev = quiz.querySelector('.t862__btn_prev')
    const btn_result = quiz.querySelector('.t862__btn_result')
    const btn_submit = quiz.querySelector('.t-submit')

    quiz_wrapper.after(btn_wrapper)

    const isFrame = quiz.querySelector('[name="isFrame"]').closest('.t-input-group')
    isFrame.classList.add('isFrame')
    isFrame.querySelector('.t-input-title').classList.add('isFrame-title')
    const title = quiz.querySelectorAll('.t-input-title:not(.isFrame-title)')

    title.forEach((e,i)=>{
        let div = document.createElement('div')
        div.classList.add('step__wrap')
        div.innerHTML = `<div class="step">${i+1}</div>`
        e.prepend(div)
    })
    
    let step__size = quiz.querySelector('[name="size"]')
    step__size = step__size.closest('.t-input-group')
    step__size.classList.add('step__size')
    
    let step__frame = quiz.querySelector('[name="frame"]')
    step__frame = step__frame.closest('.t-input-group')
    step__frame.classList.add('step__frame')

    // скрываем шаг isFrame и делаем активными при выборе варианта "в раме"
    let frame_input = step__frame.querySelectorAll('[name="frame"]')

    frame_input.forEach((el)=>{
        el.addEventListener('change',()=>{ 
            frame_input[0].checked
            ? isFrame.classList.remove('t-input-group')
            : isFrame.classList.add('t-input-group')
        })
    })
   
    
    let observer = new MutationObserver(mutationRecords => {
        if (btn_next.style.display == 'none' && btn_result.style.display == 'none'){
            btn_wrapper.classList.add('fixed-top')
            quiz.classList.add('quiz__finish')
        }else{
            btn_wrapper.classList.remove('fixed-top')
            quiz.classList.remove('quiz__finish')
        }
    });
    observer.observe(btn_result, {
        attributes: true
    });
    
    btn_next.classList.add('border__animate')
    btn_result.classList.add('border__animate')
    btn_submit.classList.add('border__animate')
    
    //загрузка файла
    const setUploadCare = setInterval(()=>{
        const upload_button = quiz.querySelector('.uploadcare--widget__button_type_open')
        if (upload_button){
            const upload_button_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12H16" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16V8" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            upload_button.innerHTML = `${upload_button_icon} Перетащите или загрузите фото (параметры)`
            clearInterval(setUploadCare)
        }
    },500)

    
    //иконка закрытия внутри окна
    for (let e = 0; e < quiz.querySelectorAll(".t862").length; e++) {
        let t = quiz.querySelectorAll(".t862 .t-popup__close")[e],
            n = t.cloneNode(!0);
        quiz.querySelectorAll(".t862 .t-popup__container")[e].append(n),
            n.addEventListener(
                "click",
                function () {
                    t.click();
                },
                !1
            );
    }
    
    /* шаг даты */
    const date = quiz.querySelector('.t-datepicker__wrapper')
    let date__icon = document.createElement('div')
    date__icon.classList.add('date__icon')
    date__icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path opacity="0.4" d="M33.3333 16.4004C34.25 16.4004 35 17.1504 35 18.0671V28.3337C35 33.3337 32.5 36.6671 26.6667 36.6671H13.3333C7.5 36.6671 5 33.3337 5 28.3337V18.0671C5 17.1504 5.75 16.4004 6.66667 16.4004H33.3333Z" fill="#FF823A"/><path d="M27.9164 5.93398V3.33398C27.9164 2.65065 27.3497 2.08398 26.6664 2.08398C25.9831 2.08398 25.4164 2.65065 25.4164 3.33398V5.83398H14.5831V3.33398C14.5831 2.65065 14.0164 2.08398 13.3331 2.08398C12.6497 2.08398 12.0831 2.65065 12.0831 3.33398V5.93398C7.58308 6.35065 5.39973 9.03398 5.0664 13.0173C5.03306 13.5006 5.43306 13.9006 5.89973 13.9006H34.0998C34.5831 13.9006 34.9831 13.484 34.9331 13.0173C34.5998 9.03398 32.4164 6.35065 27.9164 5.93398Z" fill="#FF823A"/><path d="M26.0998 30.7833L24.8665 29.55C25.4998 28.5834 25.8831 27.4167 25.8831 26.1667C25.8831 22.7667 23.1165 20 19.7165 20C16.3165 20 13.5498 22.7667 13.5498 26.1667C13.5498 29.5667 16.3165 32.3333 19.7165 32.3333C20.9665 32.3333 22.1331 31.95 23.0998 31.3167L24.3331 32.55C24.5831 32.8 24.8998 32.9167 25.2165 32.9167C25.5331 32.9167 25.8498 32.8 26.0998 32.55C26.5831 32.0667 26.5831 31.2667 26.0998 30.7833Z" fill="#FF823A"/></svg>'
    date.prepend(date__icon)

   
   /* переносим прогрессбар */
   const progressbar = quiz.querySelector('.t862__progressbar')
   btn_wrapper.prepend(progressbar)

   /* деактивируем кнопку далее если не выбран ни один вариант */
   btn_next.classList.add('disabled')

   const isSelected = () => {
        let input = quiz.querySelectorAll('.t-input-group-step_active input[data-tilda-req="1"], .t-input-group-step_active [name="isFrame"]')
        let input_checked = quiz.querySelectorAll('.t-input-group-step_active input[data-tilda-req="1"]:checked, .t-input-group-step_active [name="isFrame"]:checked')

        input.length ?
         input_checked.length > 0 ? btn_next.classList.remove('disabled') : btn_next.classList.add('disabled') :
         btn_next.classList.remove('disabled')
        
        input.forEach((el)=>{
            el.addEventListener('change', ()=>{
                let input_checked = quiz.querySelectorAll('.t-input-group-step_active input[data-tilda-req="1"]:checked, .t-input-group-step_active [name="isFrame"]:checked')
                input_checked.length > 0 ? btn_next.classList.remove('disabled') : btn_next.classList.add('disabled')
            })
        })
    }

    setTimeout(()=>{ isSelected() },500)

    btn_next.addEventListener('click',()=>{
        setTimeout(()=>{ isSelected() },300)
    })
    btn_prev.addEventListener('click',()=>{
        setTimeout(()=>{ isSelected() },300)
    })

    /* параметры портрета */
    const btn_params = document.createElement('div')
    btn_params.classList.add('btn_params')
    btn_params.innerHTML = '<div class="btn_params__text">Параметры вашего портрета</div><div class="btn_params__icon"></div>'

    const params__content = document.createElement('div')
    params__content.classList.add('params__content')
    params__content.innerHTML = '<div class="params_step"><div class="params_name">Выберите параметры</div></div>'
    btn_params.prepend(params__content)

    btn_wrapper.prepend(btn_params)

    btn_params.addEventListener('click', ()=>{
        btn_params.classList.toggle('active')
    })

    const params_step = document.createElement('div')
    params_step.classList.add('params_step')
    
    let params_data = []
    const setParams = () => {
        const step_active = quiz.querySelector('.t-input-group-step_active')
        const step_active__input = step_active.querySelectorAll('input:checked')
        const step_active__input__text = step_active.querySelector('input')
        const step_active__title = step_active.querySelector('.t-input-group-step_active .t-input-title').innerHTML.split('</div>').reverse()[0]
        const step_active__index = Number(step_active.dataset.questionNumber)

        let step_active__value = []
        
        //проверяем тип поля и получаем значение
        if(step_active__input.length > 0 ? step_active__input[0].type == 'radio' : false ||
           step_active__input.length > 0 ? step_active__input[0].type == 'checkbox' : false){
            step_active__input.forEach(el => {
                step_active__value = [...step_active__value, el.value]
            })   
        }else if(step_active__input__text.role == 'uploadcare-uploader' ){
            step_active__value = 'Загружено изображение'
        }else{
            step_active__value = step_active__input__text.value
        }
        //проверяем есть ли элемент в массиве и обновляем данные
        if (params_data[step_active__index]){
            if (step_active__value == ''){
                params_data.splice(step_active__index, 1)
            }else{
                params_data[step_active__index].step_active__value = step_active__value
            }
        }else{
            params_data.push({step_active__index, step_active__title, step_active__value})
        }     
        console.log(params_data)
        params__content.innerHTML = ''
        params_data.forEach((param)=>{
            params__content.innerHTML += `
            <div class="params_step">
                <div class="params_name">${param.step_active__title}</div>
                <div class="params_value">${param.step_active__value}</div>
            </div>`
        })
    }

    const quiz__form = quiz.querySelector('form')
    const inputs = quiz__form.querySelectorAll('input')
    inputs.forEach((input)=>{
        input.addEventListener('change', ()=> { setParams() })
    })

    //Отслеживаем изменения атрибутов выбора даты и загрузки файла только после нажатия на кнопку далее, чтобы предотвратить раннюю инициализацию
    btn_next.addEventListener('click', ()=>{
        let observer__date = new MutationObserver(mutationRecords => {
            setTimeout(()=>{ setParams() },500)
        })
        observer__date.observe(quiz.querySelector('[name="date"]'), {
            attributes: true
        })
        
        let observer__uploadcare = new MutationObserver(mutationRecords => {
            if (mutationRecords.reverse[0].target.dataset.status == 'loaded'){
                setTimeout(()=>{ setParams() },500)
            }
        })
        
        setTimeout(()=>{
            const uploadcare__widget = quiz.querySelector('.uploadcare--widget')
            observer__uploadcare.observe(uploadcare__widget, {
                attributes: true
            })
        },1000)
    })

    // переносим подзаголовок в блок с инпутами
    setTimeout(()=>{
        const quiz__subtitle = quiz.querySelectorAll('.t-input-group:not(.t862__t-input-group_capture) .t-input-subtitle')
        quiz__subtitle.forEach((el)=>{
            el.nextElementSibling.append(el)
        })
    },1000)

    // смешенный тип выбора варианта
    const radio__checkbox = quiz.querySelector('[name="radio__checkbox"]')
    const radio__checkbox__inputs = radio__checkbox.closest('.t-input-block').querySelectorAll('input.t-img-select')
    
    radio__checkbox__inputs[0].addEventListener('change',()=>{
        radio__checkbox__inputs[0].checked ? radio__checkbox__inputs[1].checked = false : ''
    })

    radio__checkbox__inputs[1].addEventListener('change',()=>{
        radio__checkbox__inputs[1].checked ? radio__checkbox__inputs[0].checked = false : ''
    })


    // создаем элемент для отображения изображений
    if (innerWidth > 960){
        const radio__checkbox_div = document.createElement('div')
        radio__checkbox_div.classList.add('radio__checkbox')

        const select__indicator = radio__checkbox.closest('.t-input-block').querySelectorAll('.t-img-select__indicator')
        
        select__indicator.forEach((el, i)=>{
            const img_select = document.createElement('div')
            img_select.classList.add('img_select')
            img_select.classList.add('h100')
            img_select.style.backgroundImage = `url(${el.dataset.original})`
            el.style.display = 'none'
            radio__checkbox_div.append(img_select)
            select__indicator.length == (i+1) ? radio__checkbox.closest('.t-input-block').prepend(radio__checkbox_div) : ''
        })


        const img_select = quiz.querySelectorAll('.img_select')
        radio__checkbox__inputs.forEach((el,i)=>{

            el.addEventListener('change', ()=>{
                let img_checked = radio__checkbox.closest('.t-input-block').querySelectorAll('input.t-img-select:checked')
                
                el.checked ? img_select[i].classList.add('active') : img_select[i].classList.remove('active')
                radio__checkbox__inputs[0].checked ? img_select[1].classList.remove('active') : ''
                radio__checkbox__inputs[1].checked ? img_select[0].classList.remove('active') : ''
                radio__checkbox__inputs[2].checked ? img_select.forEach((el)=>{el.classList.remove('h100')}) : img_select.forEach((el)=>{el.classList.add('h100')})
                img_checked.length == 1 ? (radio__checkbox__inputs[0].checked ? '' : img_select[0].classList.remove('active'), radio__checkbox__inputs[2].checked ? img_select[2].classList.add('h100') : '' ) : ''
                img_checked.length == 0 ? img_select[0].classList.add('active') : ''
            })
        })

        img_select[0].classList.add('active')
    }

    //запишем высоту устройства для стилей
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    
    // шаг выбора стиля //добавляем серый текст после тире
    const step__style = quiz.querySelector('[name="style"]').closest('.t-input-group')
    step__style.classList.add('step__style')
    const step__style__text = step__style.querySelectorAll('.t-img-select__text')
    
    step__style__text.forEach((el)=>{
        let text = el.innerHTML.split('-')
        if (text.length > 1){
            el.innerHTML = `<div class="step__style__text">${text[0]}-<div class="price"> ${text[1]}</div></div>`
        }
    })


}catch(err){console.log(err)}
})