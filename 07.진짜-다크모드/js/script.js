document.addEventListener('DOMContentLoaded', () => {
  // 대상을 변수에 저장
  const $body = document.body;
  const $toggle = document.querySelector('#mode');

  // 로컬스토리지에 저장된 값을 변수에 담아
  const colorMode = localStorage.getItem('saveMode');
  // console.log(colorMode);
  // --------------없어도 됨-----------------------
  // 다크모드가 선택되었다면 body에 dark 클래스 부여(반대는 dark 클래스 삭제)
  if (colorMode === 'dark') {
    // 다크모드가 선택된 상황
    $body.classList.add('dark');
    $toggle.nextElementSibling.textContent = 'DARK';
    $toggle.checked = true;
  } else {
    // 다크모드가 선택되지 않은 상황
    $body.classList.remove('dark');
    $toggle.nextElementSibling.textContent = 'LIGHT';
    $toggle.checked = false;
  }
  // -------------------------------------------------

  // 체크박스를 클릭했을 때
  $toggle.addEventListener('click', () => {
    // console.log($toggle.checked);

    if ($body.classList.contains('dark')) {
      console.log('다크모드임');
      $body.classList.remove('dark');
      localStorage.setItem('saveMove', 'light');
      $toggle.nextElementSibling.textContent = 'LIGHT';
      $toggle.checked = false;
    } else {
      console.log('다크모드 아님');
      $body.classList.add('dark');
      localStorage.setItem('saveMove', 'dark');
      $toggle.nextElementSibling.textContent = 'DARK';
      $toggle.checked = true;
    }
  });
});
