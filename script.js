const button = document.querySelectorAll('.but');
const slides = document.querySelectorAll('.a');
const wraper = document.querySelector('.wraper');

let position = 0;
let count = wraper.children.length;

button.forEach(item => {
  item.addEventListener('click', (event)=>{
    
    if(event.target.textContent === 'next'){
     let dir = true;
      moveLastChild (dir);
    }else{
      let dir = false;
      moveLastChild (dir);
    }
  })
})

function moveLastChild (dir) {
if(dir)  {
  const newElem = wraper.children[0];
  wraper.style.left = '-200px'; // смещаем врапер на ширину слайда
    // по окончанию собития transitin отключаем transition, что бы не было заметно смещение left 0
    // перекидываем элемент в конец родителя
    wraper.addEventListener("transitionend", ()=>{ 
      wraper.style.transition ='none';
      wraper.style.left ='-100px';
      wraper.append(newElem);
    });
    // включаем transition
    wraper.style.transition ='left .5s'
}else{
  const newElem = wraper.children[count-1];
  // смещаем слайдер в начальное значение т.к по css указано -100px
      wraper.style.left = '0px';
   wraper.addEventListener("transitionend", ()=>{ 
    //отключаем transition что бы вернуть начальную позицию котора была в css
      wraper.style.transition ='none';
       wraper.prepend(newElem);
       wraper.style.left = '-100px';
      
    });
   wraper.style.transition ='left .5s';
      
} 
}
