console.clear();
function typingEffect(element,speed){
  let text=element.innerHTML;
  element.innerHTML="";
 var i=0;
  var timer=setInterval(function(){
    if(i<text.length){
      element.append(text.charAt(i))
      i++;
    }else{
      clearInterval(timer);
    }
  },speed)
  
}





const p=document.querySelector('.wrapper p');
typingEffect(p,70);

$("#nav-toggler").on("change", () => {
    var i = $("label[for='nav-toggler'] > i");
    i.addClass("rotate_x");
    setTimeout(() => {
      i.removeAttr("class").addClass(
        `fas fa-${$("#nav-toggler").prop("checked") ? "times" : "bars"} rotate_b`
      );
    }, 400);
    setTimeout(() => {
      i.removeClass("rotate_b");
    }, 810);
  });
  

