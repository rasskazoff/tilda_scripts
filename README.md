# Скрипты для Tilda

## Команды для консоли
####  Создать копию всех страниц tilda 
let pages = document.querySelectorAll('.td-page')
pages.forEach((page)=>{
    let page_id = page.id.replace(/[^+\d]/g, '')
    td__pagesettings__dublicatePage(page_id)
})

## Контакты

[Telegram @storysmm](https://t.me/storysmm)
