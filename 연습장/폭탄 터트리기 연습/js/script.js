//html 요소를 파악한 후에 실행 - 스타일시트, 이미지, 하위프레임 등의 로딩은 기다리지 않는다.
document.addEventListener('DOMContentLoaded', function () {
  const $bomb = document.querySelector('.bomb');
  const $info = document.querySelector('.info');
  const $spark = document.querySelector('.spark');
  const $btnGo = document.querySelector('#go');
  const $btnStop = document.querySelector('#stop');
  const $beep = document.querySelector('#beep-sound');
  const $boom = document.querySelector('#boom-sound');

  let count = 10;
  let timer;

  $btnGo.addEventListener('click', function () {
    clearInterval(timer);
    timer = setInterval(counter, 1000);
    $spark.classList.add('sparkling');
    bombReset();
  });
  $btnStop.addEventListener('click', function () {
    clearInterval(timer);
    $spark.classList.remove('sparkling');
  });

  function counter() {
    if (count === 0) {
      $bomb.classList.add('boom');
      $boom.play();
      $spark.classList.remove('sparkling');
      $info.style.opacity = 0;

      clearInterval(timer);
      count = 10;
      setTimeout(bombReset, 3000);
    } else {
      count--;
      $beep.play();
    }
    $info.textContent = count;
  }

  function bombReset() {
    $bomb.classList.remove('boom');
    $info.style.opacity = 1;
  }
});
