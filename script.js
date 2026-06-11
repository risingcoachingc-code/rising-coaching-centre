/* ==========================
   RISING COACHING CENTRE
   LIQUID GLASS V2
   Developer: Asmamul SK
========================== */


/* Scroll Reveal */

const revealElements = document.querySelectorAll(
'.glass,.section-heading,.hero-content'
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

},{
threshold:0.15
});

revealElements.forEach(el=>{
observer.observe(el);
});


/* Counter Animation */

const stats = document.querySelectorAll('.stat h2');

stats.forEach(stat=>{

const text = stat.innerText;

const target = parseInt(text);

if(isNaN(target)) return;

let count = 0;

const updateCounter = ()=>{

const speed = Math.ceil(target / 50);

count += speed;

if(count < target){

if(text.includes('%')){
stat.innerText = count + '%';
}else if(text.includes('+')){
stat.innerText = count + '+';
}else{
stat.innerText = count;
}

requestAnimationFrame(updateCounter);

}else{

stat.innerText = text;

}

};

updateCounter();

});


/* Floating Cards Animation */

const cards = document.querySelectorAll('.float-card');

cards.forEach((card,index)=>{

setInterval(()=>{

card.style.transform =
`translateY(${Math.sin(Date.now()/800 + index)*10}px)`;

},20);

});


/* Mouse Glow */

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});


/* Glass Tilt Effect */

document.querySelectorAll(
'.course-card,.founder-card,.info-card,.why-card'
).forEach(card=>{

card.addEventListener('mousemove',(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateX =
((y / rect.height)-0.5)*-10;

const rotateY =
((x / rect.width)-0.5)*10;

card.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;

});

card.addEventListener('mouseleave',()=>{

card.style.transform =
`
perspective(1000px)
rotateX(0deg)
rotateY(0deg)
translateY(0px)
`;

});

});


/* Smooth Navbar Shadow */

window.addEventListener("scroll",()=>{

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 10px 40px rgba(0,0,0,.25)";

}else{

navbar.style.boxShadow = "none";

}

});


/* Developer Console Signature */

console.log(
"%cDeveloped By Asmamul SK",
"color:#ff8a00;font-size:18px;font-weight:bold;"
);