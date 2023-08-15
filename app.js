let arr = [];

while(arr.length<3){
    let num =  Math.floor(Math.random()*10);
    if(!arr.includes(num)) arr.push(num);
}

alert('컴퓨터가 숫자를 생성함');

let count =0;
let result =``;

while(true){
    let ball =0;
    let strike =0; 
    count++;

    let user = prompt(`${count} 번째 숫자를 입력하세요 :`);

    user = user.split('').map((x)=>Number(x));

    user.forEach((x, index)=>{
        if(arr.indexOf(x)===index){
            strike ++;
        }else if(arr.includes(x)) ball++;
    
    })

    if(strike===3) result = `${strike}S`;
    else if(ball===3) result = `${ball}B`;
    else result =`${ball}B${strike}S`;

    alert(result);

    if(strike===3){
    alert(count+'번 만에 맞히셨습니다. 게임을 종료합니다');
        break;
    }
}
