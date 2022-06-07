let page = document.querySelector('.page');

let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function(){
    page.classList.toggle('dark-theme')
};


let i = 0;
var animations = ["files/frog-hat.gif",
"files/frog-lily.gif",
"files/frog-jumping.gif",
"files/sapo-frog.gif",
"files/frog-takes-a-shower-shower.gif",
"files/frog-toad-flex-twerk.gif",
"files/jump.gif"
];


let frogButton = document.querySelector('.frog-button');
frogButton.onclick = function(){

    image = document.querySelector('.about-image').src 
    = animations[i];

    if(i < 4)
    {
        i++;
    }
    else
    {
        i=0;
    }
};