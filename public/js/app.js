fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})




const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')
weatherForm.addEventListener('submit',(e)=>{
    //prevents default behaviour of rerendering the page on submission
    //the method is called on the event object 'e'
    e.preventDefault()
    const location = search.value
    message1.textContent = 'Loading...'
    message2.textContent = ''
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if (data.error){
            message1.textContent = data.error
        }
        else{
            message1.textContent = data.forecast
            message2.textContent = data.location
        } 
    })
})
})