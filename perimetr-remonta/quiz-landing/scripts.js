function t_ready(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}

//текст вокруг кнопки 
try {
    t_ready(()=>{
        const quiz = document.querySelector('.uc-quiz')
        const quizNew = document.querySelector('#quiz')
        quizNew.append(quiz)
    })
}catch(err){console.log(err)}