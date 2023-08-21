let prev = document.querySelector('.spec-list>.prev');
let next = document.querySelector('.spec-list>.next');
let lh = document.querySelector('.lh');

next.onclick = () => {
    lh.style.left='-116px'
}

prev.onclick = () => {
    lh.style.left='0'
}