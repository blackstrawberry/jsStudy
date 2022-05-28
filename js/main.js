let age = prompt("나이를 입력 해 주세요.");
if(isNaN(parseInt(age))){
  alert('숫자를 입력해 주세요.');
  location.reload();
}
else{
  let birth = confirm("생일이 지났나요?");
  if(birth){
    document.body.innerHTML = "<h1>현재나이 :"+age+"</h1><h1>만 나이 :"+(age-1)+"</h1>";
  }else{
    document.body.innerHTML = "<h1>현재나이 :"+age+"</h1><h1>만 나이 :"+(age-2)+"</h1>";
  }
}