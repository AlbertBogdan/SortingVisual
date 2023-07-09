
async function compareAndSwap(ele, i, j, dir) {
  if (dir == (parseInt(ele[i].style.height) > parseInt(ele[j].style.height))) {
    if(checkSound())
    {
      playNote(parseInt(ele[i].style.height)*10);
      playNote(parseInt(ele[j].style.height)*10);
    }
    swap(ele[i], ele[j]);
    await waitforme(delay);
  }
}

async function bitonicMerge(ele, low, cnt, dir) {
  if (cnt > 1) {
    let k = Math.floor(cnt / 2);
    for (let i = low; i < low + k; i++) {
      await compareAndSwap(ele, i, i + k, dir);
    }
    await bitonicMerge(ele, low, k, dir);
    await bitonicMerge(ele, low + k, k, dir);
  }
}

async function bitonicSort(ele, low, cnt, dir) {
  if (cnt > 1) {
    let k = Math.floor(cnt / 2);
    await bitonicSort(ele, low, k, 1);
    await bitonicSort(ele, low + k, k, 0);
    await bitonicMerge(ele, low, cnt, dir);
  }
}

const bitonicSortbtn = document.querySelector(".bitonicSort");
bitonicSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableReloadBtn();
    document.querySelector(".bitonicSort").style.color = 'white';
    document.querySelector(".bitonicSort").style.background = '#58afcc';
    document.querySelector(".bitonicSort").style.border = '1.5px #58afcc solid';
    const ele = document.querySelectorAll('.bar');
    let low = 0;
    let cnt = ele.length;
    let dir = 1;
    await bitonicSort(ele, low, cnt, dir);
    document.querySelector(".bitonicSort").style.color = '';
    document.querySelector(".bitonicSort").style.background = '';
    document.querySelector(".bitonicSort").style.border = '';
    disableReloadBtn();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});