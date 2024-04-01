let box = Array.from(document.querySelectorAll('.box'));
let url = 'https://api.thecatapi.com/v1/images/search?limit=10';
let cat = document.getElementById('cat');

box.forEach((e,i)=>{
    // console.log(e);
    // console.log(e.getElementsByTagName('img')[0]);
    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        // console.log(data);
        e.getElementsByTagName('img')[0].src = data[0].url;
    })

})

window.addEventListener('scroll',()=>{
    if(scrollY > 0 && scrollY < 350){
        cat.style.color = 'white';
        cat.style.transition = '0.5s ease-in-out';
    }else if(scrollY > 350){
        cat.style.color = 'orange';
        cat.style.transition = '0.5s ease-in-out';
    }
    else{
        cat.style.color = 'black';
        cat.style.transition = '0.5s ease-in-out';

    }
})

// 2nd METHOD

// let url = "https://api.thecatapi.com/v1/images/search?limit=10";
// let main = document.getElementById('main');

// let dataCat = fetch(url);
// dataCat.then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log(data);
//     data.forEach((e) => {
//         let div = document.createElement('div');
//         let img = document.createElement('img');
//         div.setAttribute('class','cat');
//         div.style.border = '2px solid white';
//         div.style.width = 320+"px";
//         div.style.height = 320+"px";
//         img.style.width = 320+"px";
//         img.style.height = 320+"px";
//         img.src = e.url;
//         img.style.objectFit = 'cover';
//         img.setAttribute('id',e.id);
//         div.append(img);
//         console.log(div);
//         main.append(div);
//     });
// })



