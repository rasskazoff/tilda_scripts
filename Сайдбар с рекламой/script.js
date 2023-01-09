    function t_ready(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}
    t_ready(()=>{
    //отложенное подключение css
    try {
        if (innerWidth >= 1200){ 
            const style = document.createElement('link')
            style.href = 'https://rasskazoff.github.io/tilda_scripts/%D0%A1%D0%B0%D0%B9%D0%B4%D0%B1%D0%B0%D1%80%20%D1%81%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%BE%D0%B9/style.css'
            style.rel = 'stylesheet'
            document.head.appendChild(style)
        }
    }catch(err){console.log(err)}
    })

    const addSidebar = (rec__start, rec__end, arrRTB, timer) => {
        t_ready(()=>{
            try {
                if (innerWidth >= 1200){ 
                    // находим все блоки между стартовым и конечным
                    const start = document.querySelector(rec__start)
                    const end = document.querySelector(rec__end)

                    const blocks_wrap = []
                    blocks_wrap.push(start)
                    let a=0

                    while(blocks_wrap[a].id !== end.id.replace('#','')){
                        blocks_wrap.push(blocks_wrap[a].nextSibling)
                        a++
                    }

                    //создаем сайдбар
                    const sidebar = document.createElement('div')
                    sidebar.classList.add('sidebar')
                    sidebar.innerHTML = `<div id="sidebar__yandex_rtb_${arrRTB[0]}"></div>`

                    //создаем обертку сайдбара и область контента
                    const content__sidebar = document.createElement('div')
                    content__sidebar.classList.add('content__sidebar')

                    const sidebar__wrapper = document.createElement('div')
                    sidebar__wrapper.classList.add('sidebar__wrapper')
                    blocks_wrap[0].before(sidebar__wrapper)
                    sidebar__wrapper.appendChild(content__sidebar)
                    sidebar__wrapper.appendChild(sidebar)

                    blocks_wrap.forEach(el => {
                        content__sidebar.append(el)
                    })

                    //добавляем рекламный виджет
                    window.yaContextCb=window.yaContextCb||[]
                    let script = document.createElement('script')
                    script.src = 'https://yandex.ru/ads/system/context.js'
                    script.async = true
                    document.body.appendChild(script)
                    
                    const render__rtb = (rtb) =>{
                        window.yaContextCb.push(()=>{
                            Ya.Context.AdvManager.render({
                            renderTo: `sidebar__yandex_rtb_${arrRTB[0]}`,
                            blockId: rtb
                            })
                        })
                        console.log(rtb)
                    }
                    render__rtb(arrRTB[0])

                    let r = 0
                    setInterval(() => {
                        render__rtb(arrRTB[r])
                        r = r == 0 ? 1 : 0
                    }, timer*1000)
                }    

            }catch(err){console.log(err)}
        })
    }

/*
//Использование скрипта
addSidebar(
    '#rec509963624', //ID начального блока tilda
    '#rec509918150', //ID  конечного блока tilda
    ['R-A-513785-33', 'R-A-513785-10'], //ID рекламных блоков
    10 //время смены рекламного блока в секундах 
)
*/