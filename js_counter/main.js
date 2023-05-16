
let counter = document.querySelector('#counter');
let btnInc = document.querySelector('#btn-inc');
let btnDec = document.querySelector('#btn-dec');


//* Alt-1
// let count = 0;
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
// let count = 0;
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
// let count = 0;

// btnInc.addEventListener('click', ()=>{counter.innerHTML = ++count;});

// btnDec.addEventListener('click', ()=>{counter.innerHTML = --count;});

// btnRes.addEventListener('click', ()=>{
//   count = 0;
//   counter.innerHTML = count;
// });

//* Alt-4
// let count = 0;
// btnInc.addEventListener('click', clickEvent);
// btnDec.addEventListener('click', clickEvent);
// btnRes.addEventListener('click', clickEvent);

// function clickEvent(){
//   console.log(this.id);
//   if(this.id === 'btn-inc') count++;
//   else if(this.id === 'btn-dec') count--;
//   else if(this.id === 'btn-reset') count = 0;

//   counter.innerHTML = count;
// }

//* Alt-5
// let count = 0;
// btnInc.addEventListener('click', clickEvent);
// btnDec.addEventListener('click', clickEvent);
// btnRes.addEventListener('click', clickEvent);

// function clickEvent(){
//   this.id === 'btn-inc' ? count++ :
//   this.id === 'btn-dec' ? count-- :
//   this.id === 'btn-reset' ? count = 0 :
//   false;

//   counter.innerHTML = count;
// }

//* Alt-6 (Saving to localStorage)
let count = localStorage.getItem('counter') ?  Number(localStorage.getItem('counter')) : 0;
btnInc.addEventListener('click', clickEvent);
btnDec.addEventListener('click', clickEvent);
btnRes.addEventListener('click', clickEvent);

function clickEvent(){
  this.id === 'btn-inc' ? count++ :
  this.id === 'btn-dec' ? count-- :
  this.id === 'btn-reset' ? count = 0 :
  false;

  localStorage.setItem('counter', count);
  counter.innerHTML = count;
}
