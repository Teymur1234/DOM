// const header = document.querySelector("header");header.innerHTML=`
// <nav>
// <img src="https://azersu.az/img/others/fon5_14_mobil_en.png"></img>
// <div class="links">
//     <ul>
//         <li><a href="">Home</a></li>
//         <li><a href="">Contact us</a></li>
//         <li><a href="">Borcunu oyren</a></li>
//         <li><a href="">Saygac al</a></li>
//         <li><a href="">Elaqe</a></li>
//     </ul>
// </div>
// </nav>
// `
const header = document.querySelector("header"); 
const nav=document.createElement("nav")
const img=document.createElement("img")
img.src="https://azersu.az/img/others/fon5_14_mobil_en.png"
const div=document.createElement("div")
div.className="links";
const ul=document.createElement("ul")
const li=document.createElement("li")
const a=document.createElement("a")
const li1=document.createElement("li")
const a1=document.createElement("a")
const li2=document.createElement("li")
const a2=document.createElement("a")
const li3=document.createElement("li")
const a3=document.createElement("a")
const li4=document.createElement("li")
const a4=document.createElement("a")
header.appendChild(nav)
nav.append(img,div)
div.appendChild(ul)
ul.append(li,li1,li2,li3,li4)
li.appendChild(a)
li1.appendChild(a1)
li2.appendChild(a2)
li3.appendChild(a3)
li4.appendChild(a4)
a.textContent="Home"
a1.textContent="Contact us"
a2.textContent="Borcunu oyren"
a3.textContent="Saygac al"
a4.textContent="Elaqe"
