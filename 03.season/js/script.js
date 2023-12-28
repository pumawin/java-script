//대상을 변수에 저장
const $body = document.body;
const $date = document.querySelector('.date');
const $season = document.querySelector('.season');

//날짜와 시간에 대한 정보 얻기
const now = new Date();
console.log(now);
console.log(now.getFullYear());

//월, 일
console.log(now.getMonth() + 1); //월은 0부터 카운트 --> 1더해주세요
console.log(now.getDate());

//요일 0-일, 1-월, 2-화, 3-수, 4-목, 5-금, 6-토
console.log(now.getDay());

//요일을 정리하자. 숫자가 나오면 안되니까
const dayList = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
console.log(dayList[now.getDay()]);

//시간, 분, 초
console.log(now.getHours()); //0~23
console.log(now.getMinutes());
console.log(now.getSeconds());

//$date에 넣을 정보를 변수에 저장
const dateText = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ${dayList[now.getDay()]}`;
console.log(dateText);

// 날짜 뿌리기
$date.textContent = dateText;

//계절 확인 및 인사말 작성
//월을 좀 더 짧게 쓰기위해 변수에 저장
const month = now.getMonth() + 1;
let seasonText;

if (month >= 3 && month <= 5) {
  //봄
  $body.classList.add('spring');
  seasonText = '🌸찬란한 봄입니다.';
} else if (month >= 6 && month <= 8) {
  //여름
  $body.classList.add('summer');
  seasonText = '🌞눈부신 여름입니다.';
} else if (month >= 9 && month <= 11) {
  //가을
  $body.classList.add('fall');
  seasonText = '🌾풍요로운 가을입니다.';
} else {
  //겨울
  $body.classList.add('winter');
  seasonText = '❄ 아름다운 겨울입니다.';
}
$season.textContent = seasonText;

//낮과 밤을 구별 : 0~17 낮, 18~23 밤
//낮이면 body에 day클래스, 밤이면 night클래스 부여
const hours = now.getHours();
// if (hours >= 0 && hours <= 17) {
//   $body.classList.add('day');
// } else {
//   $body.classList.add('night');
// }

hours >= 0 && hours <= 17 ? $body.classList.add('day') : $body.classList.add('night');

// 삼항조건연산자
//조건? true-실행문1: false-실행문2
// const test = true;
// test ? console.log('참') : console.log('거짓');
