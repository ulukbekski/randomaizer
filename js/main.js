let ol = document.querySelector('#MyList');
let li = ol.getElementsByTagName('li');
function giveRandom() {
    let actives = []
    for (let index = 0; index < li.length; index++) {
        const element = li[index];
        if (!element.getAttribute('aria-disabled')) {
          actives.push(element)
        }
    }
    document.querySelector('#giveRandomResult').innerHTML = actives[Math.floor(actives.length * Math.random()) ].innerText;  
}

for (let index = 0; index < li.length; index++) {
    const element = li[index];
    element.addEventListener('click', function() {
    if (!element.getAttribute('aria-disabled')) {
        element.setAttribute("aria-disabled","true")
    }else{
        element.setAttribute("aria-disabled","false")
    }
        element.classList.toggle('disabled')
    })

    
}
