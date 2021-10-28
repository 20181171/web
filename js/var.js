//4. 변수(variable) : 데이터를 저장하는 기억장소, 자료형을 입력하지 않음
// dynamic data typing(변수에 값이 대입되는 순간 자료형이 결정, 선언하지 않아도 사용할 수 있음)
// - 변수 통용범위 : local variable, global variable
// let과 var구분
// - 자료형 : number(수치형), string(문자열), boolean(부울형), object(객체형)
// - typeof() : 자료형을 확인
let age = 100; //글로벌변수
{  
let age = 20; //로컬변수
console.log(age);
age = 30;
console.log(age);
}
console.log(age);

b = 70;
var b;
console.log("b=" + b);

let c;
c = 100; //꼭 선언을 해야함
console.log("c=" +c);
console.log(typeof(c));
