async function partition(arr, l, r){
    let i = l - 1;
    for (let j = l; j <= r-1; j++){
        try{
        arr[i].style.background = '#dd3939';
        arr[j].style.background = '#dd3939';
        }
        catch{}
        if (parseInt(arr[j].style.height) <= parseInt(arr[r].style.height)){
            i++;
            if(checkSound())
            {
                playNote(parseInt(arr[i].style.height)*10);
                playNote(parseInt(arr[j].style.height)*10);
            }
            await waitforme(delay);
            swap(arr[i], arr[j]);
            arr[i].style.background = '#519259';
            arr[j].style.background = '#519259';
        }
    }
    i++;
    arr[i].style.background = '#dd3939';
    arr[r].style.background = '#dd3939';
    if(checkSound())
    {
        playNote(parseInt(arr[i].style.height)*10);
        playNote(parseInt(arr[r].style.height)*10);
    }
    await waitforme(delay);
    swap(arr[i],arr[r]);
    arr[i].style.background = '#519259';
    arr[r].style.background = '#519259';
    return i;
}

async function quickSort(arr, l, r){
  if (l < r){
    let pi = await partition(arr, l, r);
    if(pi === arr.length) return;
    await quickSort(arr, l, pi - 1);
    await quickSort(arr, pi + 1, r);
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
    const arr = document.querySelectorAll('.bar');
    let l = 0;
    let r = arr.length - 1;
    await quickSort(arr, l, r);
    for(let i = 0; i < arr.length;i++)
        arr[i].style.background = '#519259';
    document.querySelector(".quickSort").style.color = '';
    document.querySelector(".quickSort").style.background = '';
    document.querySelector(".quickSort").style.border = '';
    disableReloadBtn();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});