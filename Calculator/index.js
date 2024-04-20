// console.log('Hello');

let value = document.getElementById('value');


const numberClick = (val) => {
    if(value.textContent == 0 || value.textContent === ''){
        value.textContent = '';
    }
    value.textContent+=val;
    
}

const clear = () =>{
    console.log("Hello");
    value.textContent = '0';
}

const del = () =>{
    console.log(value.textContent);
    value.textContent = value.textContent.slice(0,-1);
}

const calculate = () => {
    console.log('Cal');
    value.textContent = eval(value.textContent);
}

document.getElementById('clear').addEventListener('click',clear);
document.getElementById('delete').addEventListener('click',del);
document.getElementById('calculate').addEventListener('click',calculate);

