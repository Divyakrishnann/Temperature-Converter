var cel = document.getElementById("cel");
var fah = document.getElementById("fah");

cel.addEventListener('input',function(){
  let c = this.value;
  let f = (c * 9/5) + 32;
  if(!Number.isInteger(f)){
    f = f.toFixed(4);
  }
  fah.value = f;
});
fah.addEventListener('input',function(){
  let fa = this.value;
  let ce= (fa - 32) * 5/9 ;
  if(!Number.isInteger(ce)){
    ce = ce.toFixed(4);
  }
  cel.value = ce;
});

