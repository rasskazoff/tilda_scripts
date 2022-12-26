function t_ready(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}

//квиз
try {
    t_ready(()=>{
        if (innerWidth > 959){
            const quiz = document.querySelector('.uc-quiz')
            const quizNew = document.querySelector('#quiz')
            quizNew.append(quiz)
        }
    })
}catch(err){console.log(err)}

//шапка
try {
    t_ready(()=>{
        const menu = document.querySelector('.uc-fixMenu')
        menu.classList.add('fixed')
        menu.classList.add('pinned')

        const showMenu = ()=>{
            if(window.pageYOffset > 333){
                setTimeout(()=>{
                    menu.classList.remove('fixed')
                },100)
            }else{
                menu.classList.add('fixed')
            }
        }
        showMenu()
        document.addEventListener('scroll',()=>{
            showMenu()
        })

    })
}catch(err){console.log(err)}