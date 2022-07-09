  

# Минимальная сумма заказа для типа доставки

По умолчанию в Tilda есть возможность выставить общую минимальную сумму заказа, мой код позволяет настраивать минимальную сумму заказа для каждого типа доставки. В примере указана минимальная сумма заказа для типа доставки "Самовывоз" 0 рублей

Код из файла js необходимо завернуть в тег < script></ script> и вставить в html блок T123

  

пример кода

    <script>
        window.onload = ()=>{

        //Название типа доставки
        let myDeliveryName = 'Самовывоз'
        //Минимальная сумма заказа для нашего типа доставки
        let myMinOrder = 0

        let minorder = tcart_minorder
        let delivery = document.querySelector('.t-radio__wrapper-delivery')
        let minlabel = document.querySelector('.t706__minimal')

        delivery.addEventListener('change', ()=>{
            let delivery_val = delivery.querySelector('input:checked').value

            if (delivery_val == myDeliveryName){
                tcart_minorder = myMinOrder
                minlabel.style.display = 'none'
            }else{
                tcart_minorder = minorder
                minlabel.style.display = 'block'
            }
        })
    }
    </script>

## Контакты

  

[Telegram @storysmm](https://t.me/storysmm)
