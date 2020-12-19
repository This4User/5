//Sixth
let arrow = document.getElementById('arrow');
arrow.onclick = function (){
    scrollTo(pageXOffset,0);
    //console.log('scroll');
}
window.addEventListener('scroll',function (){
    /*if ((screen.width === 1920) || (screen.width === 1366)){
        arrow.hidden = (pageYOffset < 250);
    }
     */
    arrow.hidden = (pageYOffset < 250);
});