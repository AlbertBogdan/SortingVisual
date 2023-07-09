async function bubble() {
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        
        for(let j = 0; j < ele.length-i-1; j++){
            if(checkSound())
            {
                playNote(parseInt(ele[j].style.height)*30);
                playNote(parseInt(ele[j+1].style.height)*30);
            }
            ele[j].style.background = '#dd3939';
            ele[j+1].style.background = '#dd3939';

            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = '#7ac7bd'; 
            ele[j+1].style.background = '#7ac7bd';
        }
        ele[ele.length-1-i].style.background = '#519259';
    }
    ele[0].style.background = '#519259';
}
const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    changecolor();
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableReloadBtn();
    document.querySelector(".bubbleSort").style.color = 'white';
    document.querySelector(".bubbleSort").style.background = '#58afcc';
    document.querySelector(".bubbleSort").style.border = '1.5px #58afcc solid';
    await bubble();
    document.querySelector(".bubbleSort").style.color = '';
    document.querySelector(".bubbleSort").style.background = '';
    document.querySelector(".bubbleSort").style.border = '';
    disableReloadBtn();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
