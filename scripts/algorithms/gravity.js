async function beadSort(ele) {
    let max = 0;
    const length = ele.length;
    
    for (let i = 0; i < length; i++) {
      let height = parseInt(ele[i].style.height);
      if (height > max) {
        max = height;
      }
    }
    
    let beads = Array.from({ length: max }, () => Array(length).fill(0));
    
    for (let i = 0; i < length; i++) {
      let height = parseInt(ele[i].style.height);
      for (let j = 0; j < height; j++) {
        beads[j][i] = 1;
      }
    }
    
    for (let row = 0; row < max; row++) {
      let sum = 0;
      for (let col = 0; col < length; col++) {
        sum += beads[row][col];
      }
      await waitforme(delay);
      let start = length - sum;
      for (let col = start; col < length; col++) {
        if(checkSound())
        {
            playNote(parseInt(ele[col].style.height)*30);
        }
        ele[col].style.height = (row + 1) + "px";
      }
    }
  }
  
  const beadSortBtn = document.querySelector(".beadSort");
  beadSortBtn.addEventListener('click', async function(){
    changecolor();
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableReloadBtn();
    document.querySelector(".beadSort").style.color = 'white';
    document.querySelector(".beadSort").style.background = '#58afcc';
    document.querySelector(".beadSort").style.border = '1.5px #58afcc solid';
    const ele = document.querySelectorAll('.bar');
    await beadSort(ele);
    document.querySelector(".beadSort").style.color = '';
    document.querySelector(".beadSort").style.background = '';
    document.querySelector(".beadSort").style.border = '';
    disableReloadBtn();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
  });
  