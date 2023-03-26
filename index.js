let firstDiv = document.querySelector('.third');
let input = document.querySelector('input');
let addButton = document.querySelector('button');
let hTag = document.querySelector('h2');
// let deleteButton = document.querySelector('.deletebtn')
// let p = document.querySelector('p');
// let buttock = document.createElement('button');
// buttock.classList.add('btn');
// buttock.textContent= 'test';
// p.appendChild(buttock);

let realButton;
let divElement ;
function createElement (){
    if(input.value.length > 0 ){
        let listElement = document.createElement('li');
        listElement.classList.add('list');
        let text= input.value;
        listElement.innerText = text;
         realButton =document.createElement('button');
        realButton.classList.add('btn');
        realButton.textContent= 'Delete';
        divElement = document.createElement('div');
        divElement.classList.add('inner-div');
        divElement.appendChild(listElement);
        divElement.appendChild(realButton);
        firstDiv.appendChild(divElement);

        realButton.addEventListener('click', (e) =>
            { e.preventDefault();
            // console.log();
            firstDiv.removeChild(e.target.parentElement);
            console.log(divElement)
            
    
        })


        
    }
   
    input.value= "";
}


addButton.addEventListener('click',addinput);

// console.log(realButton)

function addinput (e){

    // e.preventDefault();
    
    createElement();

// input.value ='';
}





// input.addEventListener('keydown', keydown)
// for the keydown eventlistener . at the first instance of inputing a word it breaks.
function keydown (e){
    // e.preventDefault();
    // if(input.value.length > 0){
        
    //     if(e.keyCode == 13){
    //         return createElement()
    //     }
    // }
    input.value='';
}
// this problem i was facing in this code is that i could not push an arguement to the colorFunc function at js54.

// buttock.addEventListener('click',colorFunc)

// function addColor(number){

//     return Math.floor(Math.random() * number + 1)
// }
// function colorFunc (){
    
//     let colorMaker = `rgb(${addColor(23)},${addColor(222)},${addColor(45)})`;
//     hTag.style.backgroundColor= colorMaker;
//     console.log(colorMaker);
//     return colorMaker;
// }

