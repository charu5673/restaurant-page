import './style.css';
import img_1 from './images/menu/coffee.jpg';
import img_2 from './images/menu/croissant.jpg';
import img_3 from './images/menu/espresso.jpg';
import img_4 from './images/menu/pastry.jpg';
import img_5 from './images/menu/sandwich.jpg';
import img_6 from './images/menu/smoothie.jpg';

let menu_div=document.createElement("div");
menu_div.classList.add("menu_div");

let div1=document.createElement("div");
div1.classList.add("div1");

let menuImgDiv=document.createElement("div");
menuImgDiv.classList.add("menuImgDiv");
let img1=new Image(),img2=new Image(),img3=new Image(),img4=new Image(),img5=new Image(),img6=new Image();
img1.src=img_1;
img2.src=img_2;
img3.src=img_3;
img4.src=img_4;
img5.src=img_5;
img6.src=img_6;
menuImgDiv.appendChild(img1);
menuImgDiv.appendChild(img2);
menuImgDiv.appendChild(img3);
menuImgDiv.appendChild(img4);
menuImgDiv.appendChild(img5);
menuImgDiv.appendChild(img6);
div1.appendChild(menuImgDiv);

let specials=document.createElement("p");
specials.textContent="Specialty Items:\r\n1. Book Lover's Coffee Combo (any coffee + pastry) - 10 BC\r\n2. Afternoon Tea Set (tea + scone + dessert) - 12 BC";
specials.classList.add("menus");
div1.appendChild(specials);

menu_div.appendChild(div1);

let div2=document.createElement("div");
div2.classList.add("div2");
div2.textContent="Paper Coffee";

menu_div.appendChild(div2);

let div3=document.createElement("div");
div3.classList.add("div3");
let mtxt=document.createElement("p");
mtxt.textContent="Menu";
div3.appendChild(mtxt);
let menu1=document.createElement("p");
menu1.textContent="Coffees:\r\n1. Espresso - 5 BC\r\n2. Americano - 6 BC\r\n3. Latte - 8 BC\r\n4. Cappuccino - 8 BC\r\n5. Mocha - 9 BC\r\n6. Cold Brew - 7 BC\r\n\r\nTeas:\r\n1. English Breakfast - 5 BC\r\n2. Earl Grey - 5 BC\r\n3. Green Tea - 6 BC\r\n4. Chai Latte - 7 BC\r\n5. Herbal Infusion - 6 BC\r\n\r\nPastries:\r\n1. Croissant - 4 BC\r\n2. Pain au Chocolat - 5 BC\r\n3. Blueberry Muffin - 5 BC";
menu1.classList.add("menus");
div3.appendChild(menu1);

menu_div.appendChild(div3);

let div4=document.createElement("div");
div4.classList.add("div4");
let menu2=document.createElement("p");
menu2.textContent="Sandwiches:\r\n1. Classic BLT - 10 BC\r\n2. Veggie Delight - 9 BC\r\n3. Turkey and Swiss - 11 BC\r\n4. Chicken Pesto Panini - 12 BC\r\n\r\nDesserts:\r\n1. Chocolate Cake - 7 BC\r\n2. Cheesecake - 7 BC\r\n3. Lemon Tart - 6 BC\r\n4. Brownie - 5 BC\r\n\r\nBeverages:\r\n1. Fresh Orange Juice - 6 BC\r\n2. Iced Tea - 5 BC\r\n3. Smoothies (various flavors) - 8 BC\r\n4. Mineral Water - 3 BC\r\n5. Lemonade - 6 BC";
menu2.classList.add("menus");
div4.appendChild(menu2);

menu_div.appendChild(div4);

export{menu_div};