//html 요소를 파악한 후에 실행- 스타일시트, 이미지, 하위프레임 등의 로딩은 기다리지 않는다.
document.addEventListener('DOMContentLoaded', function () {
  //대상을 변수에 저장
  const $bomb = document.querySelector('.bomb');
  const $info = document.querySelector('.info');
  const $spark = document.querySelector('.spark');
  const $btnGO = document.querySelector('#go');
  const $btnStop = document.querySelector('#stop');
  const $beep = document.querySelector('#beep-sound');
  const $boom = document.querySelector('#boom-sound');

  let count = 10;
  let timer;

  //각각의 버튼을 클릭했을 때

  //버튼을 클릭했을 때
  $btnGO.addEventListener('click', function () {
    clearInterval(timer);
    timer = setInterval(counter, 1000);
    $spark.classList.add('sparkling');
    bombReset();
  });
  $btnStop.addEventListener('click', function () {
    clearInterval(timer);
    $spark.classList.remove('sparkling');
  });

  //1초에 한번씩 숫자가 1씩 감소--> setInterval(동작, 시간);
  // let count = 10;

  //동작을 함수로 정의
  function counter() {
    //0이되면 종료, 숫자를 감소
    if (count === 0) {
      $bomb.classList.add('boom');
      $boom.play();
      $spark.classList.remove('sparkling');
      $info.style.opacity = 0;

      //타이머 해제
      clearInterval(timer);
      count = 10;

      //3초후에 초기화
      setTimeout(bombReset, 3000);
    } else {
      count--;
      $beep.play();
    }
    $info.textContent = count;
  }

  //초기화
  function bombReset() {
    $bomb.classList.remove('boom');
    $info.style.opacity = 1;
  }
  // console.log(count);
  //clearInterval 은 멈추는 것이다
});
