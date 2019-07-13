
console.log('Working!!')



const weatherForm = document.querySelector('form') 
const search = document.querySelector('input')
const messageOne = document.getElementById('message-1')
const messageTwo = document.getElementById('message-2')
const messageThree = document.getElementById('message-3')

weatherForm.addEventListener('submit',(e)=>{
    
    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading....'
    messageTwo.textContent = ''
    messageThree.textContent = ''

    fetch('/weather?address='+location).then((Response)=>{
        Response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error
            }
            else{
                messageOne.textContent = data.location
                messageTwo.textContent = JSON.stringify(data.forecast.temperature) 
                messageThree.textContent = JSON.stringify(data.forecast.summary)

                console.log(data.forecast)

            }
        })
    })})