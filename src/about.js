import './style.css';
import abImg from './images/about/about.jpg'

let about_div=document.createElement("div");
about_div.classList.add("about_div");

let first=document.createElement("div");
first.classList.add("first");
let p1=document.createElement("p");
p1.textContent="Contact Information\r\n\r\nPhone: (555) 123-4567\r\n\r\nEmail: info@papercoffee.bt\r\n\r\nWebsite: www.papercoffee.bt\r\n\r\nSocial Media:\r\n     - Facebook: facebook.com/papercoffee\r\n     - Instagram: @papercoffee_bt\r\n     - Twitter: papercoffee_bt";
first.appendChild(p1);
let p2=document.createElement("p");
p2.textContent="Founded in 2020, Paper Coffee was born from a passion for literature and a desire to create a cozy, inviting space where people can escape the hustle and bustle of everyday life. We envisioned a place where the aroma of freshly brewed coffee blends harmoniously with the comforting scent of well-loved books, creating an atmosphere that feels like a warm embrace.";
first.appendChild(p2);

let second=document.createElement("div");
second.classList.add("second");
let abHead=document.createElement("p");
abHead.textContent="Paper Coffee";
second.appendChild(abHead);
let ab_Img=new Image();
ab_Img.src=abImg;
second.appendChild(ab_Img);

about_div.appendChild(first);
about_div.appendChild(second);

export{about_div};