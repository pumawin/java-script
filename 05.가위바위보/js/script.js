// html 요소들의 파악이 끝나면 실행해라
document.addEventListener('DOMContentLoaded', () => {
  //대상을 변수에 저장
  const $body = document.body;
  const $resultUser = document.querySelector('.result-user');
  const $resultCom = document.querySelector('.result-com');
  const $resultText = document.querySelector('.result-text');
  const $wrap = document.querySelector('.wrap');
  const $rpsSound = document.querySelector('#rps-sound');
  const $yesSound = document.querySelector('#yes-sound');

  // 컴퓨터가 선택할 수 있는 옵션
  const options = [
    { choice: '가위', img: './img/scissors.png' },
    { choice: '바위', img: './img/rock.png"' },
    { choice: '보', img: './img/paper.png' },
  ];

  // 사용자가 이미지를 클릭하면
  $wrap.addEventListener('click', playGame);

  // 함수 정의
  function playGame(e) {
    // console.log(e.target);

    $rpsSound.play();

    // 이미지 클릭한게 아니라면 종료
    if (e.target.tagName !== 'IMG') return;

    // 사용자의 선택을 변수에 각각 담자(텍스트, 이미지)
    const userChoice = e.target.alt;
    const userChoiceImg = e.target.src;
    console.log(userChoice, userChoiceImg);

    // 컴퓨터의 선택을 변수에 각각 담자(텍스트, 이미지)
    //배열에 접근하려면? 배열[인덱스]
    //객체에 접근하려면? 객체['키'] or 객체.키
    // console.log(options[1].choice);
    // console.log(options[2].img);
    // console.log(options[2]['img']);
    const comIdx = Math.floor(Math.random() * 3);
    const comChoice = options[comIdx].choice;
    const comChoiceImg = options[comIdx].img;
    console.log(comChoice, comChoiceImg);

    let result;
    if (userChoice === comChoice) {
      result = '비겼다';
    } else if ((userChoice === '가위' && comChoice === '보') || (userChoice === '바위' && comChoice === '가위') || (userChoice === '보' && comChoice === '바위')) {
      result = '이겼다';
      setTimeout(() => {
        $resultUser.classList.add('shake-vertical');
        $yesSound.play();
      });
    } else {
      result = '졌다';
    }

    // 결과값을 각각의 영역에 뿌리자
    $resultText.textContent = result;
    // $resultUser.innerHTML='<img src-"'+ userChoiceImg +'">';
    $resultUser.innerHTML = `<img src="${userChoiceImg}">`;
    $resultCom.innerHTML = `<img src="${comChoiceImg}">`;

    // 결과를 보여주는 애니메이션의 시작은 body에 active클래스 부여
    setTimeout(() => {
      $body.classList.add('active');
    }, 1000);

    // 3초후에 원상복구 = body에 active 클래스 삭제
    setTimeout(function () {}, 3000);
    setTimeout(() => {
      $body.classList.remove('active');
      $resultUser.classList.remove('shake-vertical');
    }, 3000);
  }
});
