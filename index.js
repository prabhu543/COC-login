let part1a = document.querySelector('.part1a');
let part2a = document.querySelector('.part2a');
let a = document.querySelector('.a');
let b = document.querySelector('.b');
const content = document.querySelector('.content');
let main=document.querySelector('.main');

b.style.display='none';
part2a.style.display='none';

function signUp(){
    content.classList.toggle('transform-active');
    b.style.display='block';
    part1a.style.display='none';
    a.style.display='none';
    part2a.style.display='flex';
}
function login(){
    content.classList.toggle('transform-active');
    part2a.style.display='none';
    a.style.display='block';
    b.style.display='none';
    part1a.style.display='flex';
}

let pop=document.querySelector('.pop');
function join(){
    main.classList.add('mainRemove');
    pop.classList.add('joined');
}
let popButton=document.querySelector('.popButton');
function submit(){
    main.classList.remove('mainRemove');
    pop.classList.remove('joined');
}