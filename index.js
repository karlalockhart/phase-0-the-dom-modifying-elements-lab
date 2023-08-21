// Write your code here!
/*
document.querySelector('main#main')

newHeader.nodeName

h1  

newHeader.id(victory)

newHeader.innerHTML

"Karla is the champion"
*/


document.getElementById('main').remove();

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = "YOUR-NAME is the champion"