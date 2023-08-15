let num = 0;
let arr = [];

while(arr.length<3){
    num =  Math.floor(Math.random()*10);
    if(!arr.includes(num)) arr.push(num);
}

let count =0;
alert('컴퓨터가 숫자를 생성함');
let result =``;

while(true){
    let ball =0;//같은 숫자
    let strike =0; //같은 위치에 같은 숫자
    count++;


    let user = prompt(`${count} 번째 숫자를 입력하세요 :`);

    user = user.split('').map((x)=>Number(x));//[1,2,3]

    user.forEach((x, index)=>{
        if(arr.indexOf(x)===index){//[2,3,4].indexof(2)===0
            strike ++;
        }else if(arr.includes(x)) ball++;
    
    })

    if(strike===3) result = `${strike}S`;
    else if(ball===3) result = `${ball}B`;
    else result =`${ball}B${strike}S`;
    
    alert(result);

    if(strike===3){
    alert(count+'번만에 맞히셨습니다. 게임을 종료합니다');
        break;
    }
}
