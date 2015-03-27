var c = document.getElementById('heena_matrix_play');
var design = c.getContext("2d");
var font_size =20;
var arr = [];
c.width = window.innerWidth;
c.height = window.innerHeight;
var letters = "H E E N A";

for(var i=0;i<c.width/20;i++){
  arr[i]=25;
}

function draw(){
  design.fillStyle="rgba(0,0,0,0.02)";
  design.fillRect(0,0,c.width,c.height);  
  design.fillStyle = "red"	;
  design.font = 25;  
  for(var i=0;i<arr.length;i++){
    var text = letters[Math.floor(Math.random()*letters.length)];
    design.fillText(text,i*font_size,arr[i]*20);
    if(arr[i]*font_size>c.height && Math.random() >0.9) {
      arr[i]=0;
    }
    arr[i]++;
  }
}

setInterval(draw,150); 
