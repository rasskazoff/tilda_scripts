console.log('Скрипт подключен')

function t_ready(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}

t_ready(()=>{
    let loginForm = document.querySelector('.uc-login')
    let login = loginForm.querySelector('[name="login"]')
    let password = loginForm.querySelector('[name="password"]')
    let buttonLogin = loginForm.querySelector('.t-submit')
    buttonLogin.type = 'button'

    login.value = 'demo'
    password.value = 'demo'

    let workForm = document.querySelector('.uc-form')
    let domain = workForm.querySelector('[name="domain"]')
    let widgets = workForm.querySelector('[name="widget"]')

    let buttonForm = workForm.querySelector('.t-submit')
    buttonForm.type = 'button'

    domain.value = 'https://ваш-сайт.рф'
    
    
    buttonLogin.addEventListener('click',()=>{
        if(login.value == 'demo' && password.value == 'demo')
        loginForm.style.display = 'none'
        workForm.style.display = 'block'
        t_lazyload__init()
    })

    let whatsAppBtn = document.querySelector('[value="Виджет WhatsApp"]')
    document.querySelectorAll('.t-bgimg').forEach(el => {
        el.addEventListener('click',(el)=>{
            let whatsAppWidget = `<a href="https://wa.me/799999999" target="_blank" class="bh-w-button bh-w-button-whatsapp-chat bh-widget-page__button-main" data-type="whatsapp" rel="noopener"><img class="bh-w-button__icon" src="data:image/svg+xml,  %3csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M.395 19.925a.252.252 0 0 0 .243.067l4.986-1.308a9.863 9.863 0 0 0 4.616 1.15c5.423 0 9.836-4.412 9.838-9.835A9.776 9.776 0 0 0 17.2 3.042 9.778 9.778 0 0 0 10.24.157C4.817.157.404 4.57.402 9.992a9.835 9.835 0 0 0 1.261 4.825L.331 19.682a.253.253 0 0 0 .064.243zm15.48-15.562a7.913 7.913 0 0 0-5.633-2.335c-4.394 0-7.968 3.572-7.97 7.964 0 1.505.42 2.97 1.218 4.238l.19.302-.805 2.939 3.015-.79.292.172a7.952 7.952 0 0 0 4.055 1.11h.003c4.391 0 7.965-3.573 7.967-7.965 0-2.128-.827-4.13-2.332-5.635zm-8.57 1.21c.17.006.36.014.539.413.125.278.338.802.503 1.211.117.287.21.518.235.567.06.12.1.26.02.42a9.181 9.181 0 0 0-.034.068c-.06.122-.104.212-.206.331l-.125.15c-.082.1-.163.199-.234.27-.12.12-.245.25-.105.488.14.24.62 1.024 1.332 1.659.765.681 1.43.97 1.767 1.116l.16.072c.239.12.379.1.518-.06.14-.16.6-.699.759-.938.16-.24.32-.2.539-.12.22.08 1.397.659 1.637.779l.133.065c.166.08.277.134.326.214.06.1.06.58-.14 1.139-.2.56-1.178 1.098-1.617 1.138l-.127.014c-.406.048-.918.108-2.747-.613-2.25-.887-3.734-3.086-4.04-3.54a2.547 2.547 0 0 0-.051-.075l-.002-.002c-.126-.168-.976-1.302-.976-2.475 0-1.103.541-1.68.791-1.947a6.05 6.05 0 0 0 .047-.05c.22-.24.48-.3.639-.3h.034c.148 0 .295 0 .425.005z' fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h20v20H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="button-icon"></a>`
            let newDiv = document.createElement("div")
                newDiv.innerHTML = whatsAppWidget
            
            setTimeout(() => {
                if(whatsAppBtn.checked){
                    document.body.append(newDiv);
                }
                else{
                    document.querySelector('.bh-w-button').remove()
                }
            }, 500)
        })
    })
})