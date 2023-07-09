
async function merge(ele, l, m, r){
    let i = l;
    let j = m + 1;
    let k = l;
    let temp = [];
    while (i <= m && j <= r){
        if (parseInt(ele[i].style.height) <= parseInt(ele[j].style.height)){
            temp[k++] = ele[i++].style.height;
        }
        else {
            temp[k++] = ele[j++].style.height;
        }
    }
    while (i <= m){
        temp[k++] = ele[i++].style.height;
    }
    while (j <= r){
        temp[k++] = ele[j++].style.height;
    }
    for (let i = l; i <= r; i++){
        ele[i].style.height = temp[i];
        if(checkSound())
        {
            playNote(parseInt(ele[i].style.height)*10);
        }
        await waitforme(delay);
    }
}

async function timSort(ele, l, r){
  if (l < r){
    let m = Math.floor((l + r) / 2);
    await timSort(ele, l, m);
    await timSort(ele, m + 1, r);
    await merge(ele, l, m, r);
  }
}

const timSortbtn = document.querySelector(".timSort");
timSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableReloadBtn();
    document.querySelector(".timSort").style.color = 'white';
    document.querySelector(".timSort").style.background = '#58afcc';
    document.querySelector(".timSort").style.border = '1.5px #58afcc solid';
    const ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    await timSort(ele, l, r);
    document.querySelector(".timSort").style.color = '';
    document.querySelector(".timSort").style.background = '';
    document.querySelector(".timSort").style.border = '';
    disableReloadBtn();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});