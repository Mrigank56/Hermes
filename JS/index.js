let text = document.getElementById('text');
let m1 = document.getElementById('m1');
let t2 = document.getElementById('t2');
let m2 = document.getElementById('m2');
let t1 = document.getElementById('t1');
let man = document.getElementById('man');
let plant = document.getElementById('plant');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * .3 + 'px';
    m1.style.left = value * 0.3 + 'px';
    t2.style.left = value * -.5 + 'px';
    t2.style.bottom = value * -.5 + 'px';
    // m2.style.left = value * 1.5 + 'px';
    // t1.style.left = value * -1.5 + 'px';
    man.style.bottom = value * -.5 + 'px';
    // plant.style.top = value * 1 + 'px';
}); 
search.addEventListener('click', () => {
    let value = window.scrollY;

    box.style.left = value * -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001 + 'px';
});

var swap=document.querySelector('.swap')

swap.addEventListener("click",()=>{
    swap.classList.toggle('swap-rotation')
    var firstlocation=document.getElementById('first-location')
    var secondlocation=document.getElementById('second-location')
    var value;
    value=secondlocation.value;
    secondlocation.value=firstlocation.value;
    firstlocation.value=value; 
})

        var element = document.getElementById("1");
        element.style.opacity = "0";

        var element = document.getElementById("2");
        element.style.opacity = "0";

        var element = document.getElementById("3");
        element.style.opacity = "0";

        var element = document.getElementById("4");
        element.style.opacity = "0";

        var element = document.getElementById("5");
        element.style.opacity = "0";

        var element = document.getElementById("6");
        element.style.opacity = "0";

        var element = document.getElementById("7");
        element.style.opacity = "0";

        var element = document.getElementById("8");
        element.style.opacity = "0";

        var element = document.getElementById("9");
        element.style.opacity = "0";

        var element = document.getElementById("10");
        element.style.opacity = "0";

        var element = document.getElementById("11");
        element.style.opacity = "0";

        var element = document.getElementById("12");
        element.style.opacity = "0";

        var element = document.getElementById("13");
        element.style.opacity = "0";

        var element = document.getElementById("14");
        element.style.opacity = "0";

        var element = document.getElementById("15");
        element.style.opacity = "0";


search.addEventListener("click",()=>{
    var x = document.getElementById("first-location").selectedIndex;
    var y = document.getElementById("second-location").selectedIndex;

    if(x==1 && y==2 || x==2 && y==1){
        var element = document.getElementById("13");
        element.style.opacity = "1";
    }

    else if(x==1 && y==3 || x==3 && y==1){
        var element = document.getElementById("12");
        element.style.opacity = "1";
    }
    else if(x==1 && y==4|| x==4 && y==1){
        var element = document.getElementById("15");
        element.style.opacity = "1";
    }
    else if(x==1 && y==5 || x==5 && y==1){
        var element = document.getElementById("11");
        element.style.opacity = "1";
    }
    else if(x==1 && y==6 || x==6 && y==1){
        var element = document.getElementById("14");
        element.style.opacity = "1";
    }
    else if(x==2 && y==3 || x==3 && y==2){
        var element = document.getElementById("6");
        element.style.opacity = "1";
    }
    else if(x==2 && y==4 || x==4 && y==2){
        var element = document.getElementById("8");
        element.style.opacity = "1";
    }
    else if(x==2 && y==5 || x==5 && y==2){
        var element = document.getElementById("5");
        element.style.opacity = "1";
    }
    else if(x==2 && y==6 || x==6 && y==2){
        var element = document.getElementById("7");
        element.style.opacity = "1";
    }
    else if(x==3 && y==4 || x==4 && y==3){
        var element = document.getElementById("4");
        element.style.opacity = "1";
    }
    else if(x==3 && y==5 || x==5 && y==3){
        var element = document.getElementById("2");
        element.style.opacity = "1";
    }
    else if(x==3 && y==6 || x==6 && y==3){
        var element = document.getElementById("3");
        element.style.opacity = "1";
    }
    else if(x==4 && y==5 || x==5 && y==4){
        var element = document.getElementById("9");
        element.style.opacity = "1";
    }
    else if(x==4 && y==6 || x==6 && y==4){
        var element = document.getElementById("10");
        element.style.opacity = "1";
    }
    else if(x==5 && y==6 || x==6 && y==5){
        var element = document.getElementById("1");
        element.style.opacity = "1";
    }
    else if((x>0&&y>0)&&x==y){
        alert("Please enter different values")
    }
})


