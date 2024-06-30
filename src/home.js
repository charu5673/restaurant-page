import './style.css';
import res_img from './images/home/restaurant.jpg'
import home_1 from './images/home/home_1.jpg'
import home_2 from './images/home/home_2.jpg'
import home_3 from './images/home/home_3.jpg'



const home_div=document.createElement("div");
home_div.classList.add("home_div");

let resImg=new Image();
resImg.src=res_img;
resImg.classList.add("res_img");

let headName=document.createElement("h1");
headName.textContent="Paper\r\nCoffee";
headName.classList.add("headName");

let abRes=document.createElement("p");
abRes.textContent="Nestled in the heart of the city, Paper Coffee is a charming book café perfect for book lovers and coffee aficionados. The walls are lined with an extensive collection of books, from classics to bestsellers, while the menu features delectable pastries, sandwiches, and artisanal coffees. With plush seating and cozy nooks, it's an ideal spot to enjoy a good book or engaging conversation.";
abRes.classList.add("abRes");

let infoDiv=document.createElement("div");
infoDiv.classList.add("infoDiv");

let address=document.createElement("div");
address.classList.add("address");
let addh=document.createElement("h4");
addh.classList.add("addh");
addh.textContent="Address:";
let addText=document.createElement("p");
addText.classList.add("addText");
addText.textContent="Paper Coffee 123 Novel Street, Booktown, LT 45678";

let hours=document.createElement("div");
hours.classList.add("hours");
let hoursh=document.createElement("h4");
hoursh.classList.add("hoursh");
hoursh.textContent="Hours:";
let bk=document.createElement("br");
let bk2=document.createElement("br");
let hoursText=document.createElement("p");
hoursText.classList.add("hoursText");
hoursText.textContent="Monday-Friday: 9AM-5PM";
let hoursText2=document.createElement("p");
hoursText2.classList.add("hoursText");
hoursText2.textContent="Saturday-Sunday: 9AM-8PM";

address.appendChild(addh);
address.appendChild(bk);
address.appendChild(addText);
hours.appendChild(hoursh);
hours.appendChild(bk2);
hours.appendChild(hoursText);
hours.appendChild(hoursText2);

infoDiv.appendChild(address);
infoDiv.appendChild(hours);

let homeImgDiv=document.createElement("div");
homeImgDiv.classList.add("homeImgDiv");
let home1=new Image();
let home2=new Image();
let home3=new Image();
home1.src=home_1;
home2.src=home_2;
home3.src=home_3;
homeImgDiv.appendChild(home1);
homeImgDiv.appendChild(home2);
homeImgDiv.appendChild(home3);

let col1=document.createElement("div");
col1.classList.add("col1");
let col2=document.createElement("div");
col2.classList.add("col2");
col1.appendChild(resImg);
col1.appendChild(infoDiv);
col2.appendChild(headName);
col2.appendChild(abRes);
col2.appendChild(homeImgDiv);

home_div.appendChild(col1);
home_div.appendChild(col2);

export
{
    home_div
}