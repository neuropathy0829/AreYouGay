document.getElementById("no-btn").addEventListener("mouseover", function() {
  const screenWidth = window.innerWidth - 100;
  const screenHeight = window.innerHeight - 100;
  
  const questionContainer = document.getElementById("question-container");
  const yesBtn = document.getElementById("yes-btn");
  
  const questionRect = questionContainer.getBoundingClientRect();
  const yesRect = yesBtn.getBoundingClientRect();
  
  const availableWidth = screenWidth - this.offsetWidth;
  const availableHeight = screenHeight - this.offsetHeight;
  
  let randomX, randomY;
  
  do {
    randomX = Math.random() * availableWidth;
    randomY = Math.random() * availableHeight;
  } while (
    randomX > questionRect.left && randomX < questionRect.right &&
    randomY > questionRect.top && randomY < questionRect.bottom
  );
  
  this.style.position = "absolute";
  this.style.left = `${randomX}px`;
  this.style.top = `${randomY}px`;
});

// 撥放音效
function playSound() {
  const audio = document.getElementById("audio");
  audio.play();
}

// 監聽Yes按鈕的點擊事件
document.getElementById("yes-btn").addEventListener("click", function() {
  playSound(); // 撥放音效
  hideElements(); // 隱藏其他元素
  document.getElementById("IamGay").style.display = 'block'; 
});

function hideElements() {
  const elementsToHide = document.querySelectorAll('body > *:not(#IamGay)');
  elementsToHide.forEach((element) => {
    element.style.display = 'none';
  });
}
