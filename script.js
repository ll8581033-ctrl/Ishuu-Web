let slider=document.getElementById('slider');
let index=0, total=3, startX=0;

function show(){slider.style.transform='translateX(' + (-index*100) + 'vw)';}

document.body.addEventListener('touchstart',e=>{startX=e.touches[0].clientX;});
document.body.addEventListener('touchend',e=>{
 let endX=e.changedTouches[0].clientX;
 if(endX<startX-50) index=(index+1)%total;
 if(endX>startX+50) index=(index-1+total)%total;
 show();
});
document.body.addEventListener('click',()=>{index=(index+1)%total;show();});
