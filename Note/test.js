
function handelClick(x){
  var audio = document.getElementById(x).getElementsByClassName("clip")[0]
  audio.play()
   const soundObj={ Q:"Q",W:"W",E:"E",A:"A",S:"S",D:"D",Z:"Z",X:"X",C:"C" }
  // show soundObj value that pairs with button's text on div #display
  text = document.getElementById(x).innerHTML;
  document.getElementById("display").innerHTML=soundObj[x];
  // get button's text
  // trigger audio's id= button's text
  };
