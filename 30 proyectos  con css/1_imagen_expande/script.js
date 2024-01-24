const tocar = document.querySelectorAll('.contenedor-item')
const contene = document.querySelector('.contenedor')
count = 0

tocar.forEach(aldar => {
    aldar.addEventListener('click', () => {
        removeActiveClasses();
        aldar.classList.add('a');
        count ++;
        
        if (count  <=0){
            let newdiv = document.createElement('div')
            let newp = document.createElement('a')
            newp.textContent = 'Regresar'
            newdiv.classList.add('buton')
            newp.href = '/30 proyectos  con css/1_imagen_expande/index.html'
            contene.appendChild(newdiv)
            newdiv.appendChild(newp)
            newp.addEventListener('click', () => {
                tocar.classList('a').remove()
            })
        }
        if (count ==2){
            aldar.classList.remove('a')
            count =0
        }
        
        console.log(count)
    })

});

const removeActiveClasses = () => {
    tocar.forEach(slat => {
        slat.classList.remove('a');
    })
}