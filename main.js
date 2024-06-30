(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>d});var a=t(601),r=t.n(a),o=t(314),i=t.n(o)()(r());i.push([e.id,"*\n{\n    font-family: 'Arial Narrow Bold', sans-serif;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\np\n{\n    white-space: pre-line;\n}\n\nheader\n{\n    height: 15vh;\n    padding: 20px;\n    background-color: #7F5E53;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader h1\n{\n    font-size: 4em;\n    color: #FFDCD2;\n}\n\nbutton\n{\n    padding-left: 10px;\n    padding-right: 10px;\n    height: 15vh;\n    font-size: 3em;\n    margin: 20px;\n    background-color: rgba(0, 0, 139, 0);\n    color: #FFDCD2;\n    font-weight: bold;\n    border: none;\n}\n\n.home_div,.menu_div,.about_div\n{\n    width: 100vw;\n    height: 85vh;\n    background-color: #FFEEE9;\n}\n\n.home_div\n{\n    display: flex;\n    padding-left: 50px;\n    padding-bottom: 10px;\n    padding-right: 20px;\n    padding-top: 30px;\n    justify-content: center;\n}\n\n.col1,.col2\n{\n    padding:30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.col1\n{\n    align-items: flex-end;\n}\n\n.res_img\n{\n    width:32vw;\n    height: auto;\n    margin-top: 30px;\n}\n\n.infoDiv\n{\n    width: 30vw;\n    margin-top: 30px;\n    padding: 20px;\n    background-color: #7F5E53;\n    color: #FFDCD2;\n    display: grid;\n    grid-template-columns: 12fr 10fr;\n    font-size: 1.2em;\n}\n\n.infoDiv div\n{\n    margin: 20px;\n}\n\n.headName\n{\n    font-weight: 100;\n    font-size: 4.5em;\n    color: #3C2D28;\n    width: 21vw;\n}\n\n.abRes\n{\n    margin-top: 30px;\n    width: 20vw;\n}\n\n.homeImgDiv\n{\n    align-self: flex-end;\n    margin-top: 24px;\n    padding:10px;\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    background-color: #7F5E53;\n    height: 20vh;\n}\n\n.homeImgDiv img\n{\n    height: 18vh;\n    width: auto;\n}\n\n.buttonSelected\n{\n    color:#7F5E53;\n    background-color: #FFEEE9;\n}\n\n.menu_div\n{\n    padding: 50px;\n    padding-left: 350px;\n    padding-right: 350px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 9fr 41fr;\n    gap: 50px;\n}\n\n.div1\n{\n    grid-row: 1/3;\n    grid-column: 1/2;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.div2\n{\n    grid-row: 1/2;\n    grid-column: 2/4;\n    font-size: 5em;\n}\n\n.div3\n{\n    grid-row: 2/3;\n    grid-column: 2/3;\n}\n\n.div3 p:first-child\n{\n    font-size: 3.5em;\n}\n\n.div4\n{\n    display: grid;\n    align-items: flex-end;\n    grid-row: 2/3;\n    grid-column: 3/4;\n}\n\n.menuImgDiv\n{\n    background-color: #7F5E53;\n    display: grid;\n    grid-template-columns: 10vw 10vw;\n    grid-template-rows: 16vh 16vh 16vh;\n    gap: 15px;\n    padding: 15px;\n}\n\n.menuImgDiv img\n{\n    height: 16vh;\n    width: 10vw;\n}\n\n.div1 p\n{\n    background-color: #7F5E53;\n}\n\n.div3,.div2\n{\n    color: #3C2D28;\n}\n\n.menus\n{\n    padding:20px;\n    background-color: #7F5E53;\n    color: #FFDCD2;\n}\n\n.about_div\n{\n    gap:50px;\n    padding-top: 50px;\n    padding-bottom: 50px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    padding-left: 350px;\n    padding-right: 350px;\n}\n\n.first\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 30px;\n}\n\n.first p\n{\n    font-size: 1.2em;\n    padding: 25px;\n    background-color: #7F5E53;\n    color: #FFDCD2;\n}\n.first p:first-child::first-line\n{\n    font-weight: bold;\n    font-size: 1.2em;\n}\n\n.second\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    font-size: 5em;\n    color: #3C2D28;\n}\n\n.second img\n{\n    margin-top: 20px;\n    display:block;\n    height: 62vh;\n    width: auto;\n}",""]);const d=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},i=[],d=0;d<e.length;d++){var c=e[d],s=a.base?c[0]+a.base:c[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,a);a.byIndex=d,n.splice(d,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var d=t(o[i]);n[d].references--}for(var c=a(e,r),s=0;s<o.length;s++){var l=t(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=c}}},659:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0;var a=t(72),r=t.n(a),o=t(825),i=t.n(o),d=t(659),c=t.n(d),s=t(56),l=t.n(s),p=t(540),u=t.n(p),m=t(113),f=t.n(m),h=t(208),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),r()(h.A,g),h.A&&h.A.locals&&h.A.locals;const v=t.p+"a9a49f9c0419f8141b60.jpg",C=t.p+"d1acb16dcc32d242fc4b.jpg",b=t.p+"e7361fe16cfb08994ea0.jpg",x=t.p+"2339f49d5928329ee587.jpg",w=document.createElement("div");w.classList.add("home_div");let y=new Image;y.src=v,y.classList.add("res_img");let E=document.createElement("h1");E.textContent="Paper\r\nCoffee",E.classList.add("headName");let L=document.createElement("p");L.textContent="Nestled in the heart of the city, Paper Coffee is a charming book café perfect for book lovers and coffee aficionados. The walls are lined with an extensive collection of books, from classics to bestsellers, while the menu features delectable pastries, sandwiches, and artisanal coffees. With plush seating and cozy nooks, it's an ideal spot to enjoy a good book or engaging conversation.",L.classList.add("abRes");let B=document.createElement("div");B.classList.add("infoDiv");let S=document.createElement("div");S.classList.add("address");let k=document.createElement("h4");k.classList.add("addh"),k.textContent="Address:";let F=document.createElement("p");F.classList.add("addText"),F.textContent="Paper Coffee 123 Novel Street, Booktown, LT 45678";let I=document.createElement("div");I.classList.add("hours");let T=document.createElement("h4");T.classList.add("hoursh"),T.textContent="Hours:";let j=document.createElement("br"),D=document.createElement("br"),M=document.createElement("p");M.classList.add("hoursText"),M.textContent="Monday-Friday: 9AM-5PM";let P=document.createElement("p");P.classList.add("hoursText"),P.textContent="Saturday-Sunday: 9AM-8PM",S.appendChild(k),S.appendChild(j),S.appendChild(F),I.appendChild(T),I.appendChild(D),I.appendChild(M),I.appendChild(P),B.appendChild(S),B.appendChild(I);let A=document.createElement("div");A.classList.add("homeImgDiv");let _=new Image,z=new Image,N=new Image;_.src=C,z.src=b,N.src=x,A.appendChild(_),A.appendChild(z),A.appendChild(N);let H=document.createElement("div");H.classList.add("col1");let q=document.createElement("div");q.classList.add("col2"),H.appendChild(y),H.appendChild(B),q.appendChild(E),q.appendChild(L),q.appendChild(A),w.appendChild(H),w.appendChild(q);const O=t.p+"d3e2be7910aef0a3b3bd.jpg",R=t.p+"e3adf4d84584e83b2d5d.jpg",W=t.p+"8822644d6c47dfa26510.jpg",$=t.p+"9b8c09a491b5c14a4c26.jpg",G=t.p+"e989e5913f3d750a6c18.jpg",J=t.p+"32b492b573a9a3b3351b.jpg";let U=document.createElement("div");U.classList.add("menu_div");let V=document.createElement("div");V.classList.add("div1");let K=document.createElement("div");K.classList.add("menuImgDiv");let Q=new Image,X=new Image,Y=new Image,Z=new Image,ee=new Image,ne=new Image;Q.src=O,X.src=R,Y.src=W,Z.src=$,ee.src=G,ne.src=J,K.appendChild(Q),K.appendChild(X),K.appendChild(Y),K.appendChild(Z),K.appendChild(ee),K.appendChild(ne),V.appendChild(K);let te=document.createElement("p");te.textContent="Specialty Items:\r\n1. Book Lover's Coffee Combo (any coffee + pastry) - 10 BC\r\n2. Afternoon Tea Set (tea + scone + dessert) - 12 BC",te.classList.add("menus"),V.appendChild(te),U.appendChild(V);let ae=document.createElement("div");ae.classList.add("div2"),ae.textContent="Paper Coffee",U.appendChild(ae);let re=document.createElement("div");re.classList.add("div3");let oe=document.createElement("p");oe.textContent="Menu",re.appendChild(oe);let ie=document.createElement("p");ie.textContent="Coffees:\r\n1. Espresso - 5 BC\r\n2. Americano - 6 BC\r\n3. Latte - 8 BC\r\n4. Cappuccino - 8 BC\r\n5. Mocha - 9 BC\r\n6. Cold Brew - 7 BC\r\n\r\nTeas:\r\n1. English Breakfast - 5 BC\r\n2. Earl Grey - 5 BC\r\n3. Green Tea - 6 BC\r\n4. Chai Latte - 7 BC\r\n5. Herbal Infusion - 6 BC\r\n\r\nPastries:\r\n1. Croissant - 4 BC\r\n2. Pain au Chocolat - 5 BC\r\n3. Blueberry Muffin - 5 BC",ie.classList.add("menus"),re.appendChild(ie),U.appendChild(re);let de=document.createElement("div");de.classList.add("div4");let ce=document.createElement("p");ce.textContent="Sandwiches:\r\n1. Classic BLT - 10 BC\r\n2. Veggie Delight - 9 BC\r\n3. Turkey and Swiss - 11 BC\r\n4. Chicken Pesto Panini - 12 BC\r\n\r\nDesserts:\r\n1. Chocolate Cake - 7 BC\r\n2. Cheesecake - 7 BC\r\n3. Lemon Tart - 6 BC\r\n4. Brownie - 5 BC\r\n\r\nBeverages:\r\n1. Fresh Orange Juice - 6 BC\r\n2. Iced Tea - 5 BC\r\n3. Smoothies (various flavors) - 8 BC\r\n4. Mineral Water - 3 BC\r\n5. Lemonade - 6 BC",ce.classList.add("menus"),de.appendChild(ce),U.appendChild(de);const se=t.p+"07151c23eba4096f063d.jpg";let le=document.createElement("div");le.classList.add("about_div");let pe=document.createElement("div");pe.classList.add("first");let ue=document.createElement("p");ue.textContent="Contact Information\r\n\r\nPhone: (555) 123-4567\r\n\r\nEmail: info@papercoffee.bt\r\n\r\nWebsite: www.papercoffee.bt\r\n\r\nSocial Media:\r\n     - Facebook: facebook.com/papercoffee\r\n     - Instagram: @papercoffee_bt\r\n     - Twitter: papercoffee_bt",pe.appendChild(ue);let me=document.createElement("p");me.textContent="Founded in 2020, Paper Coffee was born from a passion for literature and a desire to create a cozy, inviting space where people can escape the hustle and bustle of everyday life. We envisioned a place where the aroma of freshly brewed coffee blends harmoniously with the comforting scent of well-loved books, creating an atmosphere that feels like a warm embrace.",pe.appendChild(me);let fe=document.createElement("div");fe.classList.add("second");let he=document.createElement("p");he.textContent="Paper Coffee",fe.appendChild(he);let ge=new Image;ge.src=se,fe.appendChild(ge),le.appendChild(pe),le.appendChild(fe);let ve=document.querySelector("#content");ve.appendChild(w);let Ce=document.querySelector(".homeb"),be=document.querySelector(".menub"),xe=document.querySelector(".aboutb");Ce.addEventListener("click",(function(e){Ce.classList.add("buttonSelected"),be.classList.remove("buttonSelected"),xe.classList.remove("buttonSelected"),ve.innerHTML="",ve.appendChild(w)})),be.addEventListener("click",(function(e){be.classList.add("buttonSelected"),Ce.classList.remove("buttonSelected"),xe.classList.remove("buttonSelected"),ve.innerHTML="",ve.appendChild(U)})),xe.addEventListener("click",(function(e){xe.classList.add("buttonSelected"),be.classList.remove("buttonSelected"),Ce.classList.remove("buttonSelected"),ve.innerHTML="",ve.appendChild(le)}))})();