/* Typing Effect */
const text="Java Full Stack Developer";
let i=0;
function typing(){
if(i<text.length){
document.querySelector(".typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,80);
}}
typing();

/* Dark Mode */
document.querySelector(".toggle").onclick=function(){
document.body.classList.toggle("light");
};

/* Skill Animation */
window.addEventListener("scroll",function(){
document.querySelectorAll(".progress").forEach(bar=>{
bar.style.width=bar.dataset.width;
});
});

/* Cursor Glow */
const cursor=document.createElement("div");
cursor.style.width="25px";
cursor.style.height="25px";
cursor.style.border="2px solid #00f7ff";
cursor.style.borderRadius="50%";
cursor.style.position="fixed";
cursor.style.pointerEvents="none";
cursor.style.transition="0.1s";
cursor.style.zIndex="9999";
document.body.appendChild(cursor);

document.addEventListener("mousemove",e=>{
cursor.style.top=e.clientY+"px";
cursor.style.left=e.clientX+"px";
});

/* Particles */
tsParticles.load("tsparticles",{
fullScreen:{enable:false},
particles:{
number:{value:80},
color:{value:["#00f7ff","#ff00ff"]},
shape:{type:"circle"},
opacity:{value:0.6},
size:{value:3},
move:{enable:true,speed:1.5},
links:{enable:true,color:"#00f7ff",opacity:0.3}
}
});
