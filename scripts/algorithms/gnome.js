
async function gnomeSort(ele, l, r){
  let i = l;
  while (i < r){
    ele[i].style.background = '#dd3939';
    ele[i+1].style.background = '#dd3939';
    if (parseInt(ele[i].style.height) <= parseInt(ele[i+1].style.height)){
      i++;
    }
    else {
      if(checkSound())
      {
        playNote(parseInt(ele[i].style.height)*10);
        playNote(parseInt(ele[i+1].style.height)*10);
      }
      await waitforme(delay);
      swap(ele[i], ele[i+1]);
      ele[i].style.background = '#519259';
      ele[i+1].style.background = '#519259';
      if (i > l){
        i--;
      }
    }
  }
  for(let i = 0; i < ele.length;i++)
    ele[i].style.background = '#519259';
}

const gnomeSortbtn = document.querySelector(".gnomeSort");
gnomeSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableReloadBtn();
    document.querySelector(".gnomeSort").style.color = 'white';
    document.querySelector(".gnomeSort").style.background = '#58afcc';
    document.querySelector(".gnomeSort").style.border = '1.5px #58afcc solid';
    const ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    await gnomeSort(ele, l, r);
    document.querySelector(".gnomeSort").style.color = '';
    document.querySelector(".gnomeSort").style.background = '';
    document.querySelector(".gnomeSort").style.border = '';
    disableReloadBtn();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});