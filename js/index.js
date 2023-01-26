/*let likeBtn=document.querySelector('like-btn')
let likeIcon=document.querySelector('#icon')
let count=document.querySelector('#count')

let clicked=false;

likeIcon.addEventListener('click',function (){
console.log('bonjour')

}) */


let likebtn=document.querySelector('#likebtn')
let dislikebtn=document.querySelector('#dislikebtn')
let input1=document.querySelector('#input1')
let input2=document.querySelector('#input2')



        likebtn.addEventListener('click', ()=>{
            
            input1.value=parseInt(input1.value) +1;
            input1.style.color="#12ff00"
        })





/*var likebtn=document.querySelector('#likebtn')

var input1=document.querySelectorAll('#input1')

likebtn.forEach((item)=>{
    item.addEventListener('click',function(){
        var likebtn=item.getAttribute('src')

        input1.setAttribute('value',value) +1
    })
})*/