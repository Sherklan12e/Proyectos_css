const drop1 = document.querySelectorAll('.dro')
const dropshow1 = document.getElementById('d')
const icondow = document.getElementById('dow-dro')
let bandera = true
drop1.forEach(droo => {
    droo.addEventListener('click', () =>{
        let a = 'hola'
        if (bandera){
            dropshow1.style.display = 'contents'
            icondow.style.transform = 'rotate(180deg)'
        
            bandera = false
        }else{
            dropshow1.style.display = 'none'
            icondow.style.transform = 'rotate(0deg)'
            bandera = true
        }
    })
});