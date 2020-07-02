
document.write("<h1>나의 적정몸무게를 알아보자!</h1>");

var myHeight = prompt("나의 키는?", "172");
var myWeight = prompt("나의 몸무게는?", "0");

var rightWeight = (myHeight - 100) * 0.9;
var kg = rightWeight - myWeight;

document.write("당신의 적정 체중은 " + rightWeight + "입니다!", "<br>");

if (kg == 0) document.write("당신은 적정 체중입니다");
else kg > 0 ? document.write("당신은 " + kg + "kg만큰 쪄야합니다") : document.write("당신은 " + kg * -1 + "kg만큼 빼야합니다");
