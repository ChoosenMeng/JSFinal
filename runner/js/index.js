//实现搜索框的模糊查询

let input = document.querySelector('.form>input');
let searchList = document.querySelector('.form>.search-list');

let searchArr = ['大连马拉松', '半程马拉松', '大连.金龙寺森林马拉松', '崇礼168', '沈阳马拉松', '全程马拉松'];

//给输入框绑定内容改变事件
function search() {
    if (this.value == '') {
        return;
    }
    searchList.innerHTML = '';
    for (let i = 0; i < searchArr.length; i++) {
        if (searchArr[i].indexOf(this.value) != -1) {
            searchList.innerHTML += "<li>" + searchArr[i] + "</li>";
            searchList.style.display = 'block';
        }
    }
}

//给输入框绑定内容改变事件
input.oninput = search;
//给输入框绑定鼠标聚焦事件
input.onfocus = search;
//给输入框绑定鼠标失焦事件
input.onblur = function () {
    searchList.style.display = 'none';
}

//实现轮播图功能
let prev = document.querySelector('.banner-box .prev');
let next = document.querySelector('.banner-box .next');
let img = document.querySelector('.banner-box>a>img');

let imgArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
let count = 0;

//上一张
prev.onclick = function () {
    count--;
    if (count < 0) {
        count = imgArr.length - 1;
    }

    point();
}

//下一张
next.onclick = function () {
    cutImg();
}

function cutImg() {
    count++;
    if (count > imgArr.length - 1) {
        count = 0;
    }
    point();
}

let timer = setInterval(cutImg, 3000);

let bannerBox = document.querySelector('.banner-box');
bannerBox.onmouseover = function () {
    clearInterval(timer);
}

bannerBox.onmouseout = function () {
    timer = setInterval(cutImg, 3000);
}

//该函数实现了让对应图片的<li>可以亮起来
function point() {
    for (let j = 0; j < lis.length; j++) {
        lis[j].className = '';
    }

    lis[count].className = 'active';
    img.src = './images/' + imgArr[count];
}

let lis = document.querySelectorAll('.banner-box li');
for (let i = 0; i < lis.length; i++) {
    lis[i].onclick = function () {
        count = i;

        point();
    }
}

let header = document.querySelector('.header');
let banner = document.querySelector('.banner');
let elevator = document.querySelector('.elevator');
//
let items = document.querySelectorAll('.content .item');
let elevatorA = document.querySelectorAll('.elevator a');
//存储从页面顶部到每个div元素底部的高度
let heightArr = [];
//基础高度
let base = header.clientHeight + banner.clientHeight + 20 + 10;

for (let i = 0; i < items.length; i++) {
    base = items[i].clientHeight + base;
    heightArr.push(base);
}

//清理掉所有楼层的a的颜色
function clearColor() {
    for (let i = 0; i < elevatorA.length; i++) {
        elevatorA[i].style.color = '';
    }
}

let searchDiv = document.querySelector('.search');
let searchLogo = document.querySelector('.search-logo');
let searchM = document.querySelector('.search-m');
let form= document.querySelector('.form');

//绑定滚动条事件
document.onscroll = function () {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    let base = header.clientHeight + banner.clientHeight + 20 + 10;

    if (scrollTop >= base) {
        elevator.className = 'elevator elevator-fix';
        searchDiv.className = 'search search-fix';
        searchLogo.style.display = 'block';
        searchM.style.height = '50px';
        form.style.top = '8px';
    } else {
        elevator.className = 'elevator';
        searchDiv.className = 'search';
        searchLogo.style.display = 'none';
        searchM.style.height = '';
        form.style.top = '';
    }

    //判断滚动条滚动过的距离
    if (scrollTop < header.clientHeight + banner.clientHeight + 30) {
        clearColor();
    } else if (scrollTop >= header.clientHeight + banner.clientHeight + 30 && scrollTop < heightArr[0]) {
        elevatorA[0].style.color = 'red';
    } else if (scrollTop >= heightArr[0] && scrollTop < heightArr[1]) {
        clearColor();
        elevatorA[1].style.color = 'red';
    }else if(scrollTop >= heightArr[1] && scrollTop < heightArr[2]){
        clearColor();
        elevatorA[2].style.color = 'red';
    }else if(scrollTop >= heightArr[2] && scrollTop < heightArr[3]){
        clearColor();
        elevatorA[3].style.color = 'red';
    }
}