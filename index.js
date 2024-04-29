document.addEventListener("DOMContentLoaded", (event) => {
    const btns = document.querySelectorAll('.services-btn')
    const btnSend = document.querySelector('.btn-send')

    const nameInput = document.querySelector('.name')
    const phoneInput = document.querySelector('.phone')

    const popupContainer = document.querySelector('.popupContainer')

    let isVisiblePopup = false

    document.addEventListener('click',  (e)=>{
        const x = e.target?.closest('.popupContent')
        console.log('x:', x)
        if (!e.target?.closest('.popupContent') && isVisiblePopup ){
            console.log('произошел клик на документ')
            popupContainer.classList.remove('isVisible')
        };
    });
    btns.forEach(btn=>{
        btn.addEventListener('click', (e)=>{
            e.stopPropagation()
            console.log('произошел клик на кнопку')
            isVisiblePopup = true
            popupContainer.classList.add('isVisible')
    
    
            const btnSend = document.querySelector('#btn-send')
    
            btnSend.addEventListener('click', (e)=>{
                e.stopPropagation()
                console.log('произошел клик на кнопку отправить')
                console.log(nameInput.value)
                nameInput.value=''
                phoneInput.value=''
    
                popupContainer.classList.remove('isVisible')
            });
        });
    })
   

    
    

    

});