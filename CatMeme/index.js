let input = document.getElementById('input');
let logo = document.getElementById('cat');

const search = () => {
    let span = document.getElementsByClassName('text');
    for(let i of span){
        let userValue = input.value.toUpperCase();
        let spanValue = i.textContent.toUpperCase();
        if(spanValue.indexOf(userValue) > -1){
            i.parentElement.style.display = '';
        }else{
            i.parentElement.style.display = 'none' 
        }
        
    }
}


input.addEventListener('keyup',search);
