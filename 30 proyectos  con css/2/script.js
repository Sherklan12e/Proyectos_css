
const link = 'https://dog.ceo/api/breeds/image/random'
const se = async() =>{
    const re = await fetch(link)
    const data = await re.json()
    console.log(data)
    console.log(data.status)
    if (data.status == 'success'){
        console.log(data.message)
    }
}

se()