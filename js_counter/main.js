
let counter = document.querySelector('#counter');
let btnInc = document.querySelector('#btn-inc');
let btnDec = document.querySelector('#btn-dec');
let btnRes = document.querySelector('#btn-reset');
let count = 0;

btnInc.addEventListener('click', function(){
  count++;
  counter.innerHTML = count;
});

btnDec.addEventListener('click', function(){
  count--;
  counter.innerHTML = count;
});

btnRes.addEventListener('click', function(){
  count = 0;
  counter.innerHTML = count;
});