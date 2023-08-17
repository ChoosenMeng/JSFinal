//实现搜索框的模糊查询

let input = document.querySelector('.form>input');
let searchList = document.querySelector('.form>.search-list');

let searchArr = ['大连马拉松','半程马拉松','大连.金龙寺森林马拉松','崇礼168','沈阳马拉松','全程马拉松'];

//给输入框绑定内容改变事件
function search(){
    if(this.value == ''){
        return;
    }
    searchList.innerHTML = '';
    for(let i = 0; i < searchArr.length; i++){
        if(searchArr[i].indexOf(this.value) != -1){
            searchList.innerHTML += "<li>"+searchArr[i]+"</li>";
            searchList.style.display = 'block';
        }
    }
}

//给输入框绑定内容改变事件
input.oninput = search;
//给输入框绑定鼠标聚焦事件
input.onfocus = search;
//给输入框绑定鼠标失焦事件
input.onblur = function(){
    searchList.style.display = 'none';
}

//实现轮播图功能
let prev = document.querySelector('.banner-box .prev');
let next = document.querySelector('.banner-box .next');
let img = document.querySelector('.banner-box>a>img'); 

let imgArr = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'];
let count = 0;

//上一张
prev.onclick = function(){
    count--;
    if(count < 0){
        count = imgArr.length - 1;
    }

    point();
}

//下一张
next.onclick = function(){
    cutImg();
}

function cutImg(){
    count++;
    if(count > imgArr.length - 1){
        count = 0;
    }
    point();
}

let timer = setInterval(cutImg,3000);

let bannerBox = document.querySelector('.banner-box');
bannerBox.onmouseover = function(){
    clearInterval(timer);
}

bannerBox.onmouseout = function(){
    timer = setInterval(cutImg,3000);
}

//该函数实现了让对应图片的<li>可以亮起来
function point(){
    for(let j = 0; j < lis.length; j++){
        lis[j].className='';
    }

    lis[count].className = 'active';
    img.src = './images/' + imgArr[count];
}

let lis = document.querySelectorAll('.banner-box li');
for(let i = 0; i < lis.length; i++){
    lis[i].onclick = function(){
        count = i;
        
        point();        
    }
}