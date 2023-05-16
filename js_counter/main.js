
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
// btnInc.addEventListener('click', ()=>{counter.innerHTML = ++count;});

// btnDec.addEventListener('click', ()=>{counter.innerHTML = --count;});

// btnRes.addEventListener('click', ()=>{
//  count = 0;
//  counter.innerHTML = count;
// });

//* Alt-4
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
btnInc.addEventListener('click', clickEvent);
btnDec.addEventListener('click', clickEvent);
btnRes.addEventListener('click', clickEvent);

function clickEvent(){
  console.log(this.id);
  this.id === 'btn-inc' ? count++ :
  this.id === 'btn-dec' ? count-- :
  this.id === 'btn-reset' ? count = 0 :
  false;

  counter.innerHTML = count;
}
