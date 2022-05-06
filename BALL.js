class Ball{  
ball(o,d) {
this.o=o;
this.d=d;
}
display(o,d,a){
  var cir;
  var rot;
  var col;
  var r;
  var f = 0.000005; 
  var c = 0;


  
    rotate(radians(rot));
  
    for (var i=0; i<a; i ++) {
    //cir= o + 50*sin(millis()*f*i);
    cir= o + 50*sin(millis()*f*i);
    col=map(cir,150,250,255,60);
    r=map(cir,150,250,d,d/2);
    fill(0,col,col);
    noStroke();
    ellipse(1.1*cir*cos(i), 0.7*cir*sin(i),r,r);    
    rot=rot+0.00005;

      
    }
}
}