document.addEventListener('DOMContentLoaded', () => {
  // 대상을 변수에 저장
  const $body = document.body;
  const $toggle = document.querySelector('#mode');

  // 로컬스토리지에 저장된 값을 변수에 담아
  const colorMode = localStorage.getItem('saveMode');
  // console.log(colorMode);
  // --------------없어도 됨-----------------------
  // 다크모드가 선택되었다면 body에 dark 클래스 부여(반대는 dark 클래스 삭제)
  // if (colorMode === 'dark') {
  //   applyDark();
  // } else {
  //   releaseDark();
  // }
  colorMode === 'dark' ? applyDark() : releaseDark();

  // -------------------------------------------------

  // 체크박스를 클릭했을 때
  $toggle.addEventListener('click', () => {
    $body.classList.contains('dark') === 'click' ? releaseDark() : applyDark();
    //   if ($body.classList.contains('dark')) {
    //     releaseDark();
    //   } else {
    //     applyDark();
    //   }
    // });

    // 공통의 동작을 함수로 정의
    // 1. dark모두 적용
    function applyDark() {
      $body.classList.add('dark');
      $toggle.nextElementSibling.textContent = 'DARK';
      $toggle.checked = true;
      localStorage.setItem('saveMove', 'dark');
    }

    // 2. dark모드 해제
    function releaseDark() {
      $body.classList.remove('dark');
      $toggle.nextElementSibling.textContent = 'LIGHT';
      $toggle.checked = false;
      localStorage.setItem('saveMove', 'light');
    }
  });
});
