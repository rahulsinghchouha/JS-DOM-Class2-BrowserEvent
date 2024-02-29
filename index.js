// document.addEventListener('click',function(){
//     console.log('i have click on document');
// });

// function eventFunction() {
//     console.log('i have clicked on the document');    
// }

// document.addEventListener('click',eventFunction);

// document.removeEventListener('click',eventFunction);

// let content=document.querySelector('#wrapper');
// content.addEventListener('click',function(rahul){
//     console.log(rahul);
// })

// let links=document.querySelectorAll('a');
// let third=links[2];
// third.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('aaya maza');
// });

// let mydiv=document.createElement('div');
// function listner(event){
//     console.log('para'+ event.target.textContent);
//     }
// mydiv.addEventListener('click',listner);
// for(let i=0; i<=100; i++)
// {
//     let newElement=document.createElement('p');

//     newElement.textContent = 'this is para' + i;
//     mydiv.appendChild(newElement);
// }
// document.body.appendChild(mydiv);

 let elements = document.querySelector('#wrapper');

 elements.addEventListener('click', function(event){
     if(event.target.nodeName==='SPAN') {   
     console.log('ho jayega kya' + event.target.textContent);
     }
 });