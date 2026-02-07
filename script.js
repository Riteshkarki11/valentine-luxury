// Canvas Animation
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Hearts animation
let hearts = [];

for(let i=0;i<20;i++){
    hearts.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        size:20+Math.random()*20,
        speed:0.5+Math.random()
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    hearts.forEach(h=>{
        h.y -= h.speed;
        if(h.y < 0) h.y = canvas.height;

        ctx.font = h.size + "px Arial";
        ctx.fillStyle = "#FF6B9D";
        ctx.fillText("♥",h.x,h.y);
    });

    requestAnimationFrame(animate);
}
animate();

// Buttons Logic
let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let success = document.getElementById("success");

let yesScale = 1;

yesBtn.onclick = () =>{
    document.querySelector(".card").style.display="none";
    success.classList.remove("hidden");
}

noBtn.onmouseover = () =>{
    let x = Math.random()*300-150;
    let y = Math.random()*300-150;

    noBtn.style.transform=`translate(${x}px,${y}px)`;

    yesScale += 0.1;
    yesBtn.style.transform=`scale(${yesScale})`;
}

