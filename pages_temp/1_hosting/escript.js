const drop1 = document.querySelectorAll('.dro')
const dropshow1 = document.getElementById('d')
const icondow = document.getElementById('dow-dro')
const nav_re = document.getElementById('nav-re')
const lonav = document.getElementById('navk')
const toger = document.querySelectorAll('.toger-nav')
const x_to = document.getElementById('open-x')
const x_op = document.getElementById('x-close')

const togerNav = document.getElementById('open-x');
const optionsNav = document.getElementById('nav-re');


x_to.addEventListener('click', () => {
  nav_re.classList.toggle('active'); 

});
x_op.addEventListener('click', () => {
    nav_re.classList.toggle('active'); 
    
});



let banderaNav = true
// toger.forEach(butom => {
//     butom.addEventListener('click', () => {
//         if (banderaNav) {
//             nav_re.style.display = 'block'
//             lonav.style.width = '100vw'
//             lonav.style.height = '100vh'
//             lonav.style.position = 'relative'
//             lonav.style.padding = '10px 30px'
//             nav_re.style.position = 'absolute'
//             nav_re.style.width = '89%'
//             nav_re.style.padding = '30px'

//             banderaNav = false
//         } else {
//             nav_re.style.display = 'flex'
//             nav_re.style.position = ''
//             lonav.style.width = '100vw'
//             lonav.style.height = '68px'

//             banderaNav = true
//         }
//     })
// })

let banderaDrop = true
drop1.forEach(droo => {
    droo.addEventListener('click', () => {
        if (banderaDrop) {
            dropshow1.style.display = 'contents'
            icondow.style.transform = 'rotate(180deg)'
            banderaDrop = false
        } else {
            dropshow1.style.display = 'none'
            icondow.style.transform = 'rotate(0deg)'
            banderaDrop = true
        }
    })
});


if (window.innerWidth < 499) {
    nav_re.style.display = 'flex';
    lonav.style.position = ' '
    nav_re.style.display = ' '
    lonav.classList.remove('expanded');
    isOpen = false;
}
