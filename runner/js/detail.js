let prev = document.querySelector('.spec-list>.prev');
let next = document.querySelector('.spec-list>.next');
let lh = document.querySelector('.lh');

next.onclick = () => {
    lh.style.left='-116px'
}

prev.onclick = () => {
    lh.style.left='0'
}

let lis = document.querySelectorAll('.lh>li');
let midImg = document.querySelector('.midImg');
let midDiv = document.querySelector('.main-img');
let bigImg = document.querySelector('.bigImg');
let bigDiv = document.querySelector('.zoomdiv');
let zoompup = document.querySelector('.zoompup');

lh.onmouseover =  function(e){
    //e.target拿到了真正触发当前ul这个鼠标划入事件的li
    let img = e.target;

    if(img == lh){
        return;
    }

    for(let i = 0; i < lis.length; i++){
        lis[i].className='';
    }

    //给li设置class
    img.parentElement.className = 'img-hover';
    //设置中图的src为小图的src
    midImg.src = img.src;
    bigImg.src = img.src;
}

midDiv.onmouseover = function(){
    zoompup.style.display='block';
    bigDiv.style.display='block';
}

midDiv.onmouseout = function(){
    zoompup.style.display='none';
    bigDiv.style.display='none';
}

midDiv.onmousemove = function(e){
    
}