function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}


function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".bitonicSort").disabled = true;
    document.querySelector(".radixSort").disabled = true;  
    document.querySelector(".beadSort").disabled = true;
    document.querySelector(".timSort").disabled = true; 
    document.querySelector(".gnomeSort").disabled = true;       
}
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".bitonicSort").disabled = false;  
    document.querySelector(".radixSort").disabled = false;  
    document.querySelector(".beadSort").disabled = false;
    document.querySelector(".timSort").disabled = false;
    document.querySelector(".gnomeSort").disabled = false;           
}

function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}

function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}
function checkSound()
{
    return document.querySelector(".arr-sound").checked;
}
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

let arraySize = document.querySelector('#arr_sz');
arraySize.addEventListener('input', function(){
    createNewArray(parseInt(arraySize.value));
});

let delay = 0;

let delayElement = document.querySelector('#speed_input'); 
delayElement.addEventListener('input', function(){
    delay = 1000 - parseInt(delayElement.value);
});


let array = [];

createNewArray();

function createNewArray(post = 150){
    deleteChild();

    array = [];
    for(var i =0; i<post;i++){
        array.push(Math.floor(Math.random() * 400) + 1);
    }

    const bars = document.querySelector("#bars");
    for(var i=0;i< post;i++)
    {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barsNo${i}`);
        bars.appendChild(bar);
    }
}

function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

function changecolor()
{
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length;i++)
    {
        ele[i].style.background = '#7ac7bd'; 
    }
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});

const Reload = document.querySelector(".reload");
disableReloadBtn();
Reload.addEventListener("click", function(){
    location.reload();
});

function disableReloadBtn(){
    document.querySelector(".reload").disabled = true;
}
function enableReloadBtn(){
    document.querySelector(".reload").disabled = false;
}

let audioCtx=null;

function playNote(freq){
    if(audioCtx==null){
        audioCtx=new(
            AudioContext || 
            webkitAudioContext || 
            window.webkitAudioContext
        )();
    }
    const dur=0.1;
    const osc=audioCtx.createOscillator();
    osc.frequency.value= freq;
    osc.start();
    osc.stop(audioCtx.currentTime+dur);
    const node=audioCtx.createGain();
    node.gain.value=0.1;
    node.gain.linearRampToValueAtTime(0, audioCtx.currentTime+dur);
    osc.connect(node);
    node.connect(audioCtx.destination);
}
