function t_ready(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}
t_ready(()=>{
// до/после 
try {
    const slider = document.querySelector('.uc-beforeafter')
    if(slider){
        const sliderNew = document.querySelector('#beforeafter')
        sliderNew.append(slider)
    }
}catch(err){console.log(err)}
})