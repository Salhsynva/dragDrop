let leftList = document.getElementById("left-list");
let rightList = document.getElementById("right-list");
let liItems = document.querySelectorAll("li");
let box = document.querySelector('.box');

liItems.forEach(el => {
    el.addEventListener('dragstart', function(e){
        e.dataTransfer.setData('dataId', el.getAttribute('data-id'))
    })
});

rightList.addEventListener('dragover',function(e){
    e.preventDefault();
})


leftList.addEventListener('dragover',function(e){
    e.preventDefault();
})

rightList.addEventListener('drop', function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]');
    rightList.appendChild(li);
})

leftList.addEventListener('drop', function(e){
    dataId = e.dataTransfer.getData('dataId');
    li = document.querySelector('[data-id="'+dataId+'"]');
    leftList.appendChild(li);
})

box.addEventListener('dragover', function(e){
    e.preventDefault()
})

box.addEventListener('drop', function(e){
    dataId = e.dataTransfer.getData('dataId');
    li = document.querySelector('[data-id="'+dataId+'"]');
    newP = document.createElement('p');
    newP.style.color = 'white'; 
    newP.innerText = li.innerText;
    box.appendChild(newP);
    li.remove();

})


