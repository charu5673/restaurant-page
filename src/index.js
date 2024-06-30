import './style.css';
import { home_div } from './home';
import { menu_div } from './menu';
import { about_div } from './about';
let main=document.querySelector("#content");
main.appendChild(home_div);

let homeb=document.querySelector(".homeb");
let menub=document.querySelector(".menub");
let aboutb=document.querySelector(".aboutb");

homeb.addEventListener("click",function(e){
    homeb.classList.add("buttonSelected");
    menub.classList.remove("buttonSelected");
    aboutb.classList.remove("buttonSelected");
    main.innerHTML="";
    main.appendChild(home_div);
});
menub.addEventListener("click",function(e){
    menub.classList.add("buttonSelected");
    homeb.classList.remove("buttonSelected");
    aboutb.classList.remove("buttonSelected");
    main.innerHTML="";
    main.appendChild(menu_div);
});
aboutb.addEventListener("click",function(e){
    aboutb.classList.add("buttonSelected");
    menub.classList.remove("buttonSelected");
    homeb.classList.remove("buttonSelected");
    main.innerHTML="";
    main.appendChild(about_div);
});