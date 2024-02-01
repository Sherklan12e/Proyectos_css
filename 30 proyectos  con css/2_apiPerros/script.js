const imagenscont = document.querySelector('.contenido-imagen')
const contenedor = document.querySelector('.contenedor')
const buton = document.querySelector('.buton')
const link = 'https://dog.ceo/api/breeds/image/random'
const se = async() =>{



    try{ 
        buton.disabled = true;
        const re = await fetch(link)
        const data = await re.json()
        

        if (data.status === 'success'){
                let imagen = document.createElement('img')
                imagen.classList.add('imagen')
                imagen.src = data.message
                imagenscont.appendChild(imagen)
        } else{
                let erorr = document.createElement('p')
                erorr.classList.add('error')
                document.body.appendChild(erorr)
        }
    } catch (error){
            console.log('errp')
    } finally {
        buton.disabled = false
    }

}



buton.addEventListener('click', () =>{
    imagenscont.innerHTML = ''
    se()

})
se()