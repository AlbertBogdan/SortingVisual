async function partition(ele, l, r){
    let i = l - 1;
    for (let j = l; j <= r-1; j++){
        try{
        ele[i].style.background = '#dd3939';
        ele[j].style.background = '#dd3939';
        }
        catch{}
        if (parseInt(ele[j].style.height) <= parseInt(ele[r].style.height)){
            i++;
            if(checkSound())
            {
                playNote(parseInt(ele[i].style.height)*10);
                playNote(parseInt(ele[j].style.height)*10);
            }
            await waitforme(delay);
            swap(ele[i], ele[j]);
            ele[i].style.background = '#519259';
            ele[j].style.background = '#519259';
        }
    }
    i++;
    ele[i].style.background = '#dd3939';
    ele[r].style.background = '#dd3939';
    if(checkSound())
    {
        playNote(parseInt(ele[i].style.height)*10);
        playNote(parseInt(ele[r].style.height)*10);
    }
    await waitforme(delay);
    swap(ele[i],ele[r]);
    ele[i].style.background = '#519259';
    ele[r].style.background = '#519259';
    return i;
}

async function quickSort(ele, l, r){
  if (l < r){
    let pi = await partition(ele, l, r);
    if(pi === ele.length) return;
    await quickSort(ele, l, pi - 1);
    await quickSort(ele, pi + 1, r);
  }
}

const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    changecolor();
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableReloadBtn();
    document.querySelector(".quickSort").style.color = 'white';
    document.querySelector(".quickSort").style.background = '#58afcc';
    document.querySelector(".quickSort").style.border = '1.5px #58afcc solid';
    const ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    await quickSort(ele, l, r);
    for(let i = 0; i < ele.length;i++)
        ele[i].style.background = '#519259';
    document.querySelector(".quickSort").style.color = '';
    document.querySelector(".quickSort").style.background = '';
    document.querySelector(".quickSort").style.border = '';
    disableReloadBtn();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});