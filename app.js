
console.log("jj")
let nextButton=document.getElementById('next');
let prevButton=document.getElementById('prev');
let mainList=document.querySelector('.main .content');
let selectorList=document.querySelector('.main .selectors');
nextButton.addEventListener('click', function() {
    runNext('next');
});
prevButton.addEventListener('click', function() {
    runNext('prev');
});
function runNext(type){
    console.log("hi")
    let mainimagesList=document.querySelectorAll('.main .content .item');
    let selectorimagesList=document.querySelectorAll('.main .selectors .item');
    if(type=='next'){
        mainList.appendChild(mainimagesList[0]);
        selectorList.appendChild(selectorimagesList[0]);

    }
    else{
        let last=mainimagesList.length-1;
        mainList.prepend(mainimagesList[last]);
        selectorList.prepend(selectorimagesList[last]);
    }
}