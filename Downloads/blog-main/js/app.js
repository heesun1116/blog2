function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }
    // function ease(t,b,c,d){
    //     return c * Math.sin(t/d * (Math.PI/2)) + b;
    // }


    function ease(t, b, c, d){
        t /= d/ 2;
        if(t <1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t -2) - 1) + b; 
    }

    requestAnimationFrame(animation);

}

var gnbListLife = document.querySelector('.gnb_list_life');
var gnbListPhoto = document.querySelector('.gnb_list_photo');
var gnbListMusic = document.querySelector('.gnb_list_music');
var gnbListTravel = document.querySelector('.gnb_list_travel');
var gnbListContact = document.querySelector('.gnb_list_contact');


gnbListLife.addEventListener('click', function(){
    smoothScroll('#life-1',1000);
});
gnbListMusic.addEventListener('click', function(){
    smoothScroll('#music-1',1000);
});
gnbListTravel.addEventListener('click', function(){
    smoothScroll('#travle-1',1000);
});
gnbListPhoto.addEventListener('click', function(){
    smoothScroll('#Photo-1',1000);
});
gnbListContact.addEventListener('click', function(){
    smoothScroll('.footer',2000);
});
/////
function showMore(){
    var moreList = document.querySelector('.promotion3');
    if(moreList.style.display == 'none'){
        moreList.style.display = 'block';
    } else{
        moreList.style.display = 'none';
    }
};
    function sendComment(){
        var commentSec = document.querySelector('.comment');
        if(commentSec.style.display == 'none'){
            commentSec.style.display = 'block';
        } else {
            commentSec.style.display = 'none';
        }
    };