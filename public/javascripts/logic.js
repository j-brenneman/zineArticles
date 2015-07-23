var heading = document.getElementsByTagName('h3');
var articles = document.getElementsByClassName('hidden');
console.log(heading, articles);

for (var i = 0; i < articles.length; i++) {
  if(articles[i].backgroundColor) {
    heading[i].className = 'colorOn';
  } else if(articles[i].backgroundURL === '') {
    heading[i].className = 'colorOff';
    heading[i].style.background = 'url(' + '/images/concrete_seamless.png' + ')'
  } else if(articles[i].backgroundURL === '' && articles[i].backgroundColor){
    heading[i].className = 'colorOn';
    heading[i].style.background = 'url(' + articles[i].backgroundURL + ')'
  } else {
    heading[i].className = 'colorOff';
    heading[i].style.background = 'url(' + articles[i].backgroundURL + ')'
  }
}
