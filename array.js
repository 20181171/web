const a = [10,30, 50, 100, 70]; // 배열선언과 초기화
const b = new Array(60, 80, 90, 20); 
//console.log(a);
//console.log(b);
let sum=0;
for(let i=0; i < a.length; i++){
    sum += a[i]; 
} //10 30 40 값이 원소의 하나씩 돌아감
console.log("합="+sum);
for(let val of b){
    console.log(val);
} // b의 원소값 추출
/*배열 조작하는 메소드
추가, 삭제
추가 : push ,unshift
삭제 : pop ,shift 
shift 와 unshift 속도가 느림

검색 : indexOf , includes
*/
b.push(300);
b.push(500);
console.log(b);
b.pop();
b.unshift(77);
console.log(b);
console.log(b.indexOf(90));
console.log(b.includes(80));
/*class는 data methods로 구성
class object 구분하기
-class template(설계도)
-object는 class의 instance => 메모리에 올려감
*/
