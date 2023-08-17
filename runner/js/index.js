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