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
    let result = document.querySelector('#giveRandomResult')
    result.innerHTML = actives[Math.floor(actives.length * Math.random()) ].innerText; 
    result.style.animation = "2s anim-popoutin ease 1";
    setTimeout(function(){ 
      result.style.animation = ""
    }, 1000) 
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
    if (actives.length > 1) {
        while(first === second){
            second = actives[Math.floor(actives.length * Math.random()) ].innerText
        }
    }
   let result = document.querySelector('#giveRandom2Result');
   result.innerHTML = first + ' ' + second;
   result.style.animation = "2s anim-popoutin ease 1";
   
   setTimeout(function(){ 
     result.style.animation = ""
   }, 1000)
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
