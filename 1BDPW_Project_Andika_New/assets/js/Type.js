function Kata(elementID, typingSpeed){
    let thhis = document.getElementById(elementID);
    let text = "Assalamualaikum Dicoding";
    let amntOfChars = text.length;
    let newString = "";
    
    setTimeout(function(){
      thhis.style.opacity = "1";
      thhis.innerHTML = "";
      for(var i = 0; i < amntOfChars; i++){
        (function(i,char){
          setTimeout(function() {        
            thhis.innerHTML += char;
          },i*typingSpeed)
        })(i+1,text[i]);
      }
    },1000);
  }
  
  window.onload = function(){
    Kata("halo",200);
  }