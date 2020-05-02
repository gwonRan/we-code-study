const eventInputBox = document.querySelector('.login_box_input');

eventInputBox.addEventListener('keyup', function(){
    const loginId = document.querySelector('#userId').value;
    const loginPw = document.querySelector('#userPw').value;
    const loginBtn = document.querySelector('.loginBtn');

    if(loginId.length>1 || loginPw.length>1){
       return loginBtn.style.backgroundColor = '#0095F6';
    } else if(loginId.length>0 || loginPw.length>0){
        return loginBtn.style.backgroundColor = '#BEDFFD';
    }
});