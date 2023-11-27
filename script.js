let body = document.createElement('body');
let nav = document.createElement('nav');
let container_1 = document.createElement('div');
let enter=document.createElement('div')
let div_1 = document.createElement('div');
let div_2 = document.createElement('div');
let p=document.createElement('p');
let ul=document.createElement('ul');
let li_1=document.createElement("li");
let li_2=document.createElement("li");
let li_3=document.createElement("li");
let li_4=document.createElement("li");
let header=document.createElement('header');
let container_2=document.createElement('div');
let first=document.createElement('div')
let div_3=document.createElement('div');
let div_4=document.createElement('div');
let section=document.createElement('section');
let div_5=document.createElement('div');
let footer=document.createElement('footer');
let container_3=document.createElement('div');
let second=document.createElement('div')
let div_6=document.createElement('div');
let div_7=document.createElement('div');


document.documentElement.append(body);
body.classList.add('body');

body.append(nav);
nav.classList.add('nav');

nav.append(container_1);
container_1.classList.add('container');

container_1.append(enter);
enter.classList.add('enter');

enter.append(div_1,div_2);
div_1.classList.add('div_1');
div_2.classList.add('div_2');

div_1.append(p);
p.classList.add('p')
p.textContent="Start Bootstrap";

div_2.append(ul)
ul.classList.add('ul')

ul.append(li_1,li_2,li_3,li_4);
li_1.innerText="Home";
li_2.innerText="resume";
li_3.innerText="Projects";
li_4.innerText="Contact";


body.append(header);
header.classList.add("header");
header.append(container_2);
container_2.classList.add('container');
container_2.append(first)
first.classList.add('first')
first.append(div_3,div_4)
div_3.classList.add('div_3')
div_4.classList.add('div_4')

body.append(section);
section.classList.add('section');
section.append(div_5);
div_5.classList.add('div_5')

body.append(footer)
footer.classList.add('footer');
footer.append(container_3);
container_3.classList.add('container')
container_3.append(second)
second.classList.add('second');
second.append(div_6,div_7)
div_6.classList.add('div_6');
div_7.classList.add('div_7');