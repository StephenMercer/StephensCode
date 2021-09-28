// Selectors
const imgArchive = document.querySelector('.wrapper')
const imgText = document.querySelectorAll('.text')
const imgImage = document.querySelectorAll('img')


for(i = 0; i < imgArchive.children.length; i++) {  
imgArchive.children[i].addEventListener('mouseenter', enterImage)
imgArchive.children[i].addEventListener('mouseleave', leaveImage)
}

function enterImage(e) {
   console.log(e.path[0].lastChild)
   e.path[0].firstChild.style = 'opacity: 0.4'
   e.path[0].lastChild.style = 'opacity: 1'
};
function leaveImage() {
   for(g = 0; g < imgText.length;g++) {
   imgText[g].style = 'opacity: 0'
   imgImage[g].style = 'opacity: 1'} 
};




