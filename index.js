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
            popupContainer.classList.remove('isVisible')
        };
    });
    btns.forEach(btn=>{
        btn.addEventListener('click', (e)=>{
            e.stopPropagation()
            isVisiblePopup = true
            popupContainer.classList.add('isVisible')
            const btnSend = document.querySelector('#btn-send')
    
            btnSend.addEventListener('click', async (e)=>{
                e.stopPropagation()

                const payload = {
                    name: nameInput.value,
                    phone: phoneInput.value,
                    service: 'пока тест'
                }

                nameInput.value=''
                phoneInput.value=''
               
                const res = await fetch('https://sheetdb.io/api/v1/xa7urttzxce7a', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(payload)
                })
        
                popupContainer.classList.remove('isVisible')
            });
        });
    })
   

    
    

    

});