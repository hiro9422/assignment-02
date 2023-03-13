for(let i = 1; i < 51; i++ ) {
  num = i;
  console.log(num);
  if(num % 10 == 0) {
    console.log('今' + num + '回ループしました。');
  };
  if(num % 4 == 0) {
    console.log('4で割り切れる数です。'+ num);
  };
  if(num == 50) {
    alert('50回カウントが終わりました');
  };
}