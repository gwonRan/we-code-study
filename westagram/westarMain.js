const mainInputContainer = document.querySelector('.feedAddComment');

mainInputContainer.addEventListener('keyup', function(){
    const mainSubmit = document.querySelector('.submitBox');
    const mainInput = document.querySelector('.inputBox');
    const mainInputVal = document.querySelector('.inputBox').value;
    const inputValColumn = document.querySelector('.feedCommentOther_column');

    if(mainInputVal.length>1){
        const commentContainer = document.querySelector('.feedComment');
        mainSubmit.style.color = '#0095F6';

        
    }
});

function iconTranstion(e){
    // e.classList.add('heartTransition');
    e.classList.remove('heartTransition');
    void e.offsetWidth;
    e.classList.add('heartTransition');
}

const button = document.querySelector('.heartButton');

button.addEventListener('click', function(){
    const heart = document.querySelector('.fa-heart');
    // heart.classList.add('fas');
    // heart.style.color='red';
    // heart.classList.add('heartTransition');

    if(heart.classList.contains('far')){
        heart.classList.replace('far','fas');
        heart.style.color = "red";
        // heart.classList.remove('heartTransition');
        // void heart.offsetWidth;
        // heart.classList.add('heartTransition');
        //트랜지션
    } else{
        heart.classList.replace('fas','far');
        heart.style.color = 'rgb(172, 172, 172)';
        // heart.classList.remove('heartTransition');
        // void heart.offsetWidth;
        // heart.classList.add('heartTransition');
    }

    iconTranstion(heart);
});


// 팔로우 -> 팔로잉
// const fllow = document.getElementsByClassName('asidePersonFollow');
// fllow.style.cursor = 'pointer';

// fllow.addEventListener('click', function(){
//     // fllow[i].innerHTML ='팔로잉';
//     // fllow[i].style.color = '#c1c1c1';
//         fllow.forEach(el => {
//             if(fllow.style.color==='#0095F6'){
//                 fllow[i].innerHTML ='팔로잉';
//                 fllow[i].style.color = '#c1c1c1';
//             }
//         });
//     }
// });