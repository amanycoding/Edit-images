let saturate= document.getElementById("saturate");
let contrast= document.getElementById("contrast");
let brightness= document.getElementById("brightness");
let sepia= document.getElementById("sepia");
let grayscale= document.getElementById("grayscale");
let blur= document.getElementById("blur");
let hueRotate=document.getElementById("hue-rotate");

let download= document.getElementById("download");
let reset= document.querySelector('span');

let upload= document.getElementById("upload");
let pic= document.getElementById("pic");
let picbox=document.querySelector('.picbox');

let canvas=document.getElementById("canvas");
let ctx= canvas.getContext('2d');

function resetValue(){
    ctx.filter='none';
    saturate.value='100';
    contrast.value='100';
    brightness.value='100';
    sepia.value='0';
    blur.value='0';
    hueRotate.value='0';
    grayscale.value='0';
}

window.onload =function(){
    download.style.display= 'none';
    reset.style.display='none';
    picbox.style.display='none';
}

upload.onchange= function(){
    resetValue();
    download.style.display='block';
    reset.style.display='block';
    picbox.style.display='block';
    let file= new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload=function(){
        pic.src=file.result;
    }
    pic.onload= function() {
        canvas.width=pic.width;
        canvas.height=pic.height;

        ctx.drawImage( pic,0,0,canvas.width,canvas.height);
        pic.style.display='none';
        
    }
}

let filters= document.querySelectorAll("ul li input");
filters.forEach( filter =>{
    filter.addEventListener('input',function(){
        ctx.filter=`
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        `
        ctx.drawImage( pic,0,0,canvas.width,canvas.height);
    })
}
    )

    download.onclick =function(){
        download.href= canvas.toDataURL();
    }