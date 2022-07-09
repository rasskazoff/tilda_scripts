//Название типа доставки
let myDeliveryName = 'Самовывоз'
//Минимальная сумма заказа для нашего типа доставки
let myMinOrder = 0

let minorder = tcart_minorder
let delivery = document.querySelector('.t-radio__wrapper-delivery')
let minlabel = document.querySelector('.t706__minimal')

delivery.addEventListener('change', function(){
    let delivery_val = delivery.querySelector('input:checked').value

    if (delivery_val == myDeliveryName){
        tcart_minorder = myMinOrder
        minlabel.style.display = 'none'
    }else{
        tcart_minorder = minorder
        minlabel.style.display = 'block'
    }
})
