let ol = document.querySelector('#MyList');
let li = ol.getElementsByTagName('li');

for (let index = 0; index < li.length; index++) {
    const element = li[index];  
}
function giveRandom() {
    let actives = []
    for (let index = 0; index < li.length; index++) {
        const element = li[index];
        if (element.getAttribute('aria-disabled') === 'false' ||
         element.getAttribute('aria-disabled') === null) {
        actives.push(element)
    }
    }
   document.querySelector('#giveRandomResult').innerHTML = 
   actives[Math.floor(actives.length * Math.random()) ].innerText;  
}

function giveRandom2() {
    let actives = []
    for (let index = 0; index < li.length; index++) {
        const element = li[index]; 
        if (element.getAttribute('aria-disabled') === 'false' ||
         element.getAttribute('aria-disabled') === null) {
        actives.push(element)
    }
    }
    let first =  actives[Math.floor(actives.length * Math.random()) ].innerText
    let second = actives[Math.floor(actives.length * Math.random()) ].innerText

    while(first === second){
        second = actives[Math.floor(actives.length * Math.random()) ].innerText
    }
   document.querySelector('#giveRandom2Result').innerHTML = first + ' ' + second;
   
    
}


for (let index = 0; index < li.length; index++) {
    const element = li[index];
    element.addEventListener('click', function() {
    if (element.getAttribute('aria-disabled') === 'false' || element.getAttribute('aria-disabled') === null) {
        element.setAttribute("aria-disabled","true")
    }else{
        element.setAttribute("aria-disabled","false")
    }
        element.classList.toggle('disabled')
    }) 
}
