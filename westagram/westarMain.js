const submitBox = document.querySelector('.submitBox');

const ulTag = document.querySelectorAll('.feedCommentOther');
let commentList = document.querySelector('.feedList');
// let liNode = commentList.cloneNode(true);

// ulTag.appendChild(liNode);

const inputBox = document.querySelectorAll('.inputBox');
const mainSubmit = document.querySelectorAll('.submitBox');

for(let i=0; i<inputBox.length; i++){
    inputBox[i].addEventListener('keyup', function(e){
        // const mainSubmit = document.querySelector('.submitBox');
        mainSubmit[i].style.color = '#0095F6';

        if(e.keyCode==13&&inputBox[i].value.length>0){
            let liNode = commentList.cloneNode(true);
            let nodeSpan = liNode.querySelector('.font-bold');
            nodeSpan.innerHTML = 'gwonRan';
            let nodeVal = liNode.querySelector('.inputVal');
            nodeVal.innerHTML = inputBox[i].value;

            let nodeHeart = liNode.querySelector('.fa-heart');
            nodeHeart.addEventListener('click', function(){
                iconSolid(nodeHeart,"red","black");
            });

            ulTag[i].appendChild(liNode);
            inputBox[i].value = null;
            mainSubmit[i].style.color = '#BFDFFD';
        }
    });
}

// mainInputContainer.addEventListener('keyup', function(){
//     const mainSubmit = document.querySelector('.submitBox');
//     const mainInput = document.querySelector('.inputBox');
//     const mainInputVal = document.querySelector('.inputBox').value;

    // let userSpan = document.createElement('span');
    //         userSpan.innerHTML = 'gwonRan';
    //         userSpan.className = 'font-bold';

    //         let innerInput = document.createElement('span');
    //         innerInput.innerText = mainInputVal;

    //         let totalBox = document.createElement('div');
    //         totalBox.appendChild('userSpan');
    //         totalBox.appendChild('innerInput');
            
    //         let commentList = document.createElement('li');
    //         commentList.appendChild('userSpan');
    //         commentList.appendChild('innerInput');

//     if(mainInputVal.length>1){
//         const commentContainer = document.querySelector('.feedComment');
//         mainSubmit.style.color = '#0095F6';

//         mainSubmit.addEventListener('click',function(){
//             let userSpan = document.createElement('span');
//             userSpan.innerHTML = 'gwonRan';
//             userSpan.className = 'font-bold';

//             let innerInput = document.createElement('span');
//             innerInput.innerText = mainInputVal;

//             let totalBox = document.createElement('div');
//             totalBox.appendChild('userSpan');
//             totalBox.appendChild('innerInput');
            
//             let commentList = document.createElement('li');
//             commentList.appendChild('userSpan');
//             commentList.appendChild('innerInput');
//         });
//     } 
// });


//하트이벤트
function iconTranstion(e){
    // e.classList.add('heartTransition');
    e.classList.remove('transition');
    void e.offsetWidth;
    e.classList.add('transition');
}


const button = document.querySelectorAll('.heartButton');
const heartAll = document.querySelectorAll('.fa-heart');

const heartBtn = document.querySelectorAll('.bigHeart');
const heartImg = document.querySelectorAll('.heartImg')
const bookmarkBtn = document.querySelectorAll('.bookmarkBtn');
const bookmarkImg = document.querySelectorAll('.bookmarkImg');
console.log(heartBtn);

for(let i=0; i<button.length; i++){
    button[i].addEventListener('click', function(){
        iconSolid(heartAll[i],"red","black");
    });
}


function iconSolid(el,col1,col2){
    if(el.classList.contains('far')){
        el.classList.replace('far','fas');
        el.style.color = col1;
    } else{
        el.classList.replace('fas','far');
        el.style.color = col2;
    }  
    iconTranstion(el);
}

for(let i=0; i<heartImg.length; i++){
    
    heartBtn[i].addEventListener('click', function(){
        console.log(i);
        imgSolid(heartImg[i], "img/heart.png", "img/redlike.png");
    });
}

for(let i=0; i<bookmarkImg.length; i++){
    bookmarkBtn[i].addEventListener('click', function(){
        imgSolid(bookmarkImg[i], "img/bookmark.png", "img/blacksaved.PNG");
    });
}

function imgSolid(element , img1, img2){
    if(element.src.includes(img1)){
        element.src=img2;
    } else{
        element.src=img1;
    }
    iconTranstion(element);
}




// //하트이벤트
// function iconTranstion(e){
//     // e.classList.add('heartTransition');
//     e.classList.remove('heartTransition');
//     void e.offsetWidth;
//     e.classList.add('heartTransition');
// }


// function iconSolid(){
    
// }
// const button = document.querySelectorAll('.heartButton');


// for(let i=0; i<button.length; i++){
//         button[i].addEventListener('click', function(){
//             // const heart = document.querySelector('.fa-heart');
//             const heartAll = document.querySelectorAll('.fa-heart');
//             // heart.classList.add('fas');
//             // heart.style.color='red';
//             // heart.classList.add('heartTransition');
        

//             if(heartAll[i].classList.contains('far')){
//                 heartAll[i].classList.replace('far','fas');
//                 heartAll[i].style.color = "red";
//                 // heart.classList.remove('heartTransition');
//                 // void heart.offsetWidth;
//                 // heart.classList.add('heartTransition');
//                 //트랜지션
//             } else{
//                 heartAll[i].classList.replace('fas','far');
//                 heartAll[i].style.color = 'rgb(172, 172, 172)';
//                 // heart.classList.remove('heartTransition');
//                 // void heart.offsetWidth;
//                 // heart.classList.add('heartTransition');
//             }  
    
//             iconTranstion(heartAll[i]);
//         });
// }



// 팔로우 -> 팔로잉
const fllow = document.querySelectorAll('.asidePersonFollow');

fllow.forEach(fllowEl => {
    fllowEl.style.cursor = 'pointer';
    fllowEl.addEventListener('click', function(){
        fllowEl.innerHTML =' ';
        // fllowEl.style.color = '#c1c1c1';
    });
});


//nav
const search = document.querySelector('.navSearch');

search.addEventListener('click', function(){
    const navSearchHide = document.querySelector('.navSearchHide');
    const deleteButton = navSearchHide.querySelector('.delete');
    // searchIcon.classList.add('searchIconTran');
    
    navSearchHide.style.display = 'flex';
    search.style.display = 'none';

    deleteButton.addEventListener('click', function(){
        navSearchHide.style.display = 'none';
        search.style.display = 'flex';
    });
});