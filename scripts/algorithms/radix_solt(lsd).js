// Функция для определения максимального числа в массиве
function getMax(ele) {
    let max = ele[0];
    for (let i = 1; i < ele.length; i++) {
      if (parseInt(ele[i].style.height) > parseInt(max.style.height)){
        max = ele[i];
      }
    }
    return max;
}
  
  // Функция для выполнения сортировки LSD
async function radixSortLSD(ele) {
    const max = getMax(ele);
    let exp = 1;
    while (parseInt(max.style.height) / exp >= 1) {
      await countingSortByDigit(ele, exp);
      exp *= 10;
    }
}
  
  // Функция для выполнения сортировки подсчётом по определенному разряду
async function countingSortByDigit(ele, exp) {
    const count = new Array(10).fill(0);
    const output = new Array(ele.length);
  
    for (let i = 0; i < ele.length; i++) {
      const digit = Math.floor(parseInt(ele[i].style.height) / exp) % 10;
      count[digit]++;
    }
  
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }
    await waitforme(delay);
    for (let i = ele.length - 1; i >= 0; i--) {
      const digit = Math.floor(parseInt(ele[i].style.height) / exp) % 10;
      output[count[digit] - 1] = ele[i].style.height;
      count[digit]--;
    }
  
    for (let i = 0; i < ele.length; i++) {
      await waitforme(delay);            
      if(checkSound())
        playNote(parseInt(ele[i].style.height)*30);
      ele[i].style.height = output[i];
    }
} 

const radixSortBtn = document.querySelector(".radixSort");
radixSortBtn.addEventListener("click", async function () {
  changecolor();
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  enableReloadBtn();
  document.querySelector(".radixSort").style.color = 'white';
  document.querySelector(".radixSort").style.background = '#58afcc';
  document.querySelector(".radixSort").style.border = '1.5px #58afcc solid';
  const ele = document.querySelectorAll(".bar");
  await radixSortLSD(ele);
  document.querySelector(".radixSort").style.color = "";
  document.querySelector(".radixSort").style.background = "";
  document.querySelector(".radixSort").style.border = "";
  disableReloadBtn();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
