/*하나의 특별한 작업을 수행하도록 설계 */
alert(add(90,120)); //호이스팅이 돼서 선언 전에 콜 가능
alert(m(80.10)); 

function add(v1, v2){ //named function
    return v1+v2;
}
console.log('함수호출'+add(10,30));

/* expression 
형식 : const x =function(a,b) {return a*b} ;
호출 : let z = x(9,8) ;
*/

const m = function(x1, x2) { // anonymous function
    return x1*x2;
}
console.log(m(9,8));
/* Hoisting 변수선언과 함수선언 등은 자바스크립트에서 맨 위로 이동함 */
/* Arrow function : 간단히 쓸 때 사용 */

//function f(x){
 //   fact = 1 ;
  //  for(i=1; i <= x; i++){
    //    fact *= i;
  //  }
  //  return fact;
  //  }
//alert(f(5));


const ff=function(a){
    fact=1;
    for(i=1; i<=a; i++){
        fact*=i;
    }
    return fact;
}
alert(ff(5))
