window.onload = () => {
main();
}

// gloabal diclaration 
let div = null;

function main(){
    const  secone = document.getElementById('sectionOne')
    const inputval = document.getElementById('hexcolor');
    const btn = document.getElementById('changeclr');
    const copybtn = document.getElementById('copybtn');
    btn.addEventListener('click', function(){
        const bgColor = generateHexcolor();
        const bgColor2 = generateHexcolor2();
        secone.style.backgroundColor = bgColor;
        this.style.backgroundColor = bgColor2;
        inputval.value = bgColor;

    });

    copybtn.addEventListener('click', function(){
        window.navigator.clipboard.writeText(inputval.value);
        if(div!= null){
            div.remove();
            div = null;
        }
        
       generateToastmsg(`${inputval.value} copied`);

      
       
    });
}
// generate hex color 

function generateHexcolor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}



function generateHexcolor2(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    return `rgb(${red}, ${green}, ${blue})`
}

// generate toast msg 

function generateToastmsg(msg){
    div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toastmsg toastmsg_slide_in';

    div.addEventListener('click', function(){
        div.classList.remove('toastmsg_slide_in');
        div.classList.add('toastmsg_slide_out');
        div.addEventListener('animationend', function(){
            div.remove();
            div = null;
        })
    })
    document.body.appendChild(div);
    
}