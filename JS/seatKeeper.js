document.getElementById('time').addEventListner("keyup",function(event){
  event.preventDefault();
  if (event.keyCode === 13){
    document.getElementById('button').click();
    }
  });
function showMessage(){
  var time = document.getElementById("time").value;
  var reason = document.getElementById("reason").value;
  return document.getElementById("message").textContent='Im away for '+reason+', will be back in '+time+ " min, don't take my seat :)" ;
}
