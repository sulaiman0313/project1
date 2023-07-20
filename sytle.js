const contain=document.getElementsByClassName('container')[0]
const mai2=document.getElementsByClassName('main')[0]



const main=document.getElementsByClassName('name')[0]

const subname=document.getElementsByClassName('subname')[0]



const btn8=document.getElementsByClassName('show')[0]

const btn6=document.getElementsByClassName('remove')[0]


btn8.addEventListener('click',function(){
    const h1=document.createElement('h3')
    const h2=document.createElement('h3')
    const h3=document.createElement('h3')
    const h4=document.createElement('h3')
    const h5=document.createElement('h3')
    const h6=document.createElement('h3')

    h1.innerText="Name   :"
    h2.innerText="Suleman"
    h3.innerText="school   :"
    h4.innerText="jamia"
    h5.innerText="Roll no   :"
    h6.innerText="36"
 

    main.appendChild(h1)
    subname.appendChild(h2)
    main.appendChild(h3)
    subname.appendChild(h4)
    main.appendChild(h5)
    subname.appendChild(h6)

})

btn6.addEventListener('click',function(){
    mai2.remove();
    
})






  


