const img1 =document.getElementById("burger");
const img2 =document.getElementById("burge");
const img3 =document.getElementById("fries");
const img4 =document.getElementById("frie");
const img5 =document.getElementById("donut");
const img6 =document.getElementById("donu");
const img7 =document.getElementById("icecream");
const img8 =document.getElementById("icecrea");
const img9 =document.getElementById("shake");
const img10 =document.getElementById("shak");
const img11=document.getElementById("pizza");
const img12 =document.getElementById("pizz");
const img13 =document.getElementById("smoothie");
const img14 =document.getElementById("smoothi");
const img15 =document.getElementById("pancake");
const img16 =document.getElementById("pancak");
const me1=document.getElementById("me");
const before=()=>{
    img1.style.display="none";
    img2.style.display="none";
    img3.style.display="none";
    img4.style.display="none";
    img5.style.display="none";
    img6.style.display="none";
    img7.style.display="none";
    img8.style.display="none";
    img9.style.display="none";
    img10.style.display="none";
    img11.style.display="none";
    img12.style.display="none";
    img13.style.display="none";
    img14.style.display="none";
    img15.style.display="none";
    img16.style.display="none";
    me1.style.display="none";
}
before();
let p=false;
let q=0;
const one=()=>{
   img2.src="hamburger.avif";
   p=true;
}
const two=()=>{
    img1.src="hamburger.avif";
    p=true;
}
burge.addEventListener("click",()=>{
    one();
    if(p==true){
       q+=1;
       console.log(q);
       if(q=="2"){
       alert("Burger Match found");
       img1.style.display="none";
       img2.style.display="none";
         }
         if(q!="2"){
            new1();
            q=1;
            img2.src="hamburger.avif";
         }
    }

});

burger.addEventListener("click",()=>{
    two();
    if(p==true){
       q+=1; 
       console.log(q);
       if(q=="2"){
        alert(" Burger Match found");
        img1.style.display="none";
        img2.style.display="none";
         }
         if(q!="2"){
            new1();
            q=1;
           img1.src="hamburger.avif";
         }
    }


});
let a=false;
let b=0;
const three=()=>{
   img13.src="smoothie.jfif";
   a=true;
}
const four=()=>{
    img14.src="smoothie.jfif";
    a=true;
}
smoothie.addEventListener("click",()=>{
    three();
    if(a==true){
        b+=1;
        console.log(b);
        if(b=="2"){
        alert("Smoothie Match found");
        img13.style.display="none";
        img14.style.display="none";
          }
          if(b!="2"){
            new1();
           b=1;
            img13.src="smoothie.jfif";
         }
     }
});
smoothi.addEventListener("click",()=>{
    four();
    if(a==true){
        b+=1;
        console.log(b);
        if(b=="2"){
        alert("Smoothie Match found");
        img13.style.display="none";
        img14.style.display="none";
          }
     if(b!="2"){
        new1();
        b=1;
        img14.src="smoothie.jfif";
     }
    }
});
let c=true;
let d=0;
const five=()=>{
   img3.src="fries.jfif";
   c=true;
}
const six=()=>{
    img4.src="fries.jfif";
    c=true;
}
fries.addEventListener("click",()=>{
    five();
    if(c==true){
        d+=1;
        console.log(d);
        if(d=="2"){
        alert("Fries Match found");
        img3.style.display="none";
        img4.style.display="none";
          }
          if(d!="2"){
            new1();
            d=1;
            img3.src="fries.jfif";
         }
     }
});
frie.addEventListener("click",()=>{
    six();
    if(c==true){
        d+=1;
        console.log(d);
        if(d=="2"){
        alert("Fries Match found");
        img3.style.display="none";
        img4.style.display="none";
          }
          if(d!="2"){
            new1();
            d=1;
            img4.src="fries.jfif";
         }
     }
});
let e=false;
let f=0;
const seven=()=>{
   img5.src="donut.png";
   e=true;
}
const eight=()=>{
    img6.src="donut.png";
    e=true;
}
donut.addEventListener("click",()=>{
    seven();
    if(e==true){
        f+=1;
        console.log(f);
        if(f=="2"){
        alert("Donut Match found");
        img5.style.display="none";
        img6.style.display="none";
          }
          if(f!="2"){
            new1();
            f=1;
            img5.src="donut.png";
         }
     }
});
donu.addEventListener("click",()=>{
    eight();
    if(e==true){
        f+=1;
        console.log(f);
        if(f=="2"){
        alert("Donut Match found");
        img5.style.display="none";
        img6.style.display="none";
          }
          if(f!="2"){
            new1();
            f=1;
            img6.src="donut.png";
         }
     }
});
let g=false;
let h=0;
const nine=()=>{
   img9.src="shake.png";
   g=true;
}
const ten=()=>{
    img10.src="shake.png";
    g=true;
}
shake.addEventListener("click",()=>{
    nine();
    if(g==true){
        h+=1;
        console.log(h);
        if(h=="2"){
        alert("Shake Match found");
        img9.style.display="none";
        img10.style.display="none";
          }
          if(h!="2"){
            new1();
            h=1;
            img9.src="shake.png";
         }
     }
});
shak.addEventListener("click",()=>{
    ten();
    if(g==true){
        h+=1;
        console.log(h);
        if(h=="2"){
        alert("Shake Match found");
        img9.style.display="none";
        img10.style.display="none";
          }
          if(h!="2"){
            new1();
            h=1;
            img10.src="shake.png";
         }
     }
});
let i=false;
j=0;
const eleven=()=>{
   img11.src="pizza.jfif";
   i=true;
}
const twelve=()=>{
    img12.src="pizza.jfif";
    i=true;
}
pizza.addEventListener("click",()=>{
    eleven();
    if(i==true){
        j+=1;
        console.log(j);
        if(j=="2"){
        alert("Pizza Match found");
        img11.style.display="none";
        img12.style.display="none";
          }
          if(j!="2"){
            new1();
            j=1;
            img11.src="pizza.jfif";
         }
     }
});
pizz.addEventListener("click",()=>{
    twelve();
    if(i==true){
        j+=1;
        console.log(j);
        if(j=="2"){
        alert("Pizza Match found");
        img11.style.display="none";
        img12.style.display="none";
          }
          if(j!="2"){
            new1();
            j=1;
            img12.src="pizza.jfif";
         }
     }
});
let k=false;
let l=0;
const thirteen=()=>{
   img15.src="pancake.jfif";
   k=true;
}
const fourteen=()=>{
    img16.src="pancake.jfif";
    k=true;
}
pancake.addEventListener("click",()=>{
    thirteen();
    if(k==true){
        l+=1;
        console.log(l);
        if(l=="2"){
        alert("Pancake Match found");
        img15.style.display="none";
        img16.style.display="none";
          }
          if(l!="2"){
            new1();
            l=1;
            img15.src="pancake.jfif";
         }
     }
});
pancak.addEventListener("click",()=>{
    fourteen();
    if(k==true){
        l+=1;
        console.log(l);
        if(l=="2"){
        alert("Pancake Match found");
        img15.style.display="none";
        img16.style.display="none";
          }
          if(l!="2"){
            new1();
            l=1;
            img16.src="pancake.jfif";
         }
     }
});
let m=false;
let n=0;
const fiveteen=()=>{
   img7.src="icecream.jfif";
   m=true;
}
const sixteen=()=>{
    img8.src="icecream.jfif";
    m=true;
}
icecream.addEventListener("click",()=>{
    fiveteen();
    if(m==true){
        n+=1;
        console.log(n);
        if(n=="2"){
        alert("Icecream Match found");
        img7.style.display="none";
        img8.style.display="none";
          }
          if(n!="2"){
            new1();
            n=1;
            img7.src="icecream.jfif";
         }
     }
});
icecrea.addEventListener("click",()=>{
    sixteen();
    if(m==true){
        n+=1;
        console.log(n);
        if(n=="2"){
        alert("Icecream Match found");
        img7.style.display="none";
        img8.style.display="none";
          }
          if(n!="2"){
            new1();
            n=1;
            img8.src="icecream.jfif";
         }
     }
});
const new11=()=>{
    img1.src="cover.jfif";
    img2.src="cover.jfif";
    img3.src="cover.jfif";
    img4.src="cover.jfif";
    img5.src="cover.jfif";
    img6.src="cover.jfif";
    img7.src="cover.jfif";
    img8.src="cover.jfif";
    img9.src="cover.jfif";
    img10.src="cover.jfif";
    img11.src="cover.jfif";
    img12.src="cover.jfif";
    img13.src="cover.jfif";
    img14.src="cover.jfif";
    img15.src="cover.jfif";
    img16.src="cover.jfif";
    img1.style.display="inline";
    img2.style.display="inline";
    img3.style.display="inline";
    img4.style.display="inline";
    img5.style.display="inline";
    img6.style.display="inline";
    img7.style.display="inline";
    img8.style.display="inline";
    img9.style.display="inline";
    img10.style.display="inline";
    img11.style.display="inline";
    img12.style.display="inline";
    img13.style.display="inline";
    img14.style.display="inline";
    img15.style.display="inline";
    img16.style.display="inline";
    q=0;
    b=0;
    d=0;
    f=0;
    h=0;
    j=0;
    l=0;
    n=0;
}
me.addEventListener("click",()=>{
    new11();
});
const new1=()=>{
    img1.src="cover.jfif";
    img2.src="cover.jfif";
    img3.src="cover.jfif";
    img4.src="cover.jfif";
    img5.src="cover.jfif";
    img6.src="cover.jfif";
    img7.src="cover.jfif";
    img8.src="cover.jfif";
    img9.src="cover.jfif";
    img10.src="cover.jfif";
    img11.src="cover.jfif";
    img12.src="cover.jfif";
    img13.src="cover.jfif";
    img14.src="cover.jfif";
    img15.src="cover.jfif";
    img16.src="cover.jfif";
    q=0;
    b=0;
    d=0;
    f=0;
    h=0;
    j=0;
    l=0;
    n=0;
}
function myfunc(){
    alert("TIME OUT")
    alert("YOU LOOSE!!!");
    new11();
}
const start1=()=>{
    img1.style.display="inline";
    img2.style.display="inline";
    img3.style.display="inline";
    img4.style.display="inline";
    img5.style.display="inline";
    img6.style.display="inline";
    img7.style.display="inline";
    img8.style.display="inline";
    img9.style.display="inline";
    img10.style.display="inline";
    img11.style.display="inline";
    img12.style.display="inline";
    img13.style.display="inline";
    img14.style.display="inline";
    img15.style.display="inline";
    img16.style.display="inline";
    me1.style.display="block";
}

start.addEventListener("click",()=>{
    start1();
});

