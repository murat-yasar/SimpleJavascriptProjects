
let counter = document.querySelector('#counter');
let btnInc = document.querySelector('#btn-inc');
let btnDec = document.querySelector('#btn-dec');
let btnRes = document.querySelector('#btn-reset');
let count = 0;

//* Alt-1
// btnInc.addEventListener('click', incNum);
// function incNum(){
//   counter.innerHTML = ++count;
// }

// btnDec.addEventListener('click', decNum);
// function decNum(){
//   counter.innerHTML = --count;
// }

// btnRes.addEventListener('click', resetNum);
// function resetNum(){
//   count = 0;
//   counter.innerHTML = count;
// }


//* Alt-2
// btnInc.addEventListener('click', function(){
//   count++;
//   counter.innerHTML = count;
// });

// btnDec.addEventListener('click', function(){
//   count--;
//   counter.innerHTML = count;
// });

// btnRes.addEventListener('click', function(){
//   count = 0;
//   counter.innerHTML = count;
// });


//* Alt-3
btnInc.addEventListener('click', ()=>{counter.innerHTML = ++count;});

btnDec.addEventListener('click', ()=>{counter.innerHTML = --count;});

btnRes.addEventListener('click', ()=>{
  count = 0;
  counter.innerHTML = count;
});
