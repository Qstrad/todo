window.onload = function(){
    let add = document.querySelector('.add');
    let del = document.querySelector('.del');
    let content = document.querySelector('.content');
    content.innerHTML = null;
    let enter_list = document.querySelector('.enter_list');
    
    add.addEventListener('click', function(){
        let p = document.createElement('p');
        p.classList.add('item');
        p.innerHTML = '<div class="zapis">'
        +'<img src="img/complete.svg" class="complete">' 
        + '<span>' 
        + enter_list.value 
        + '</span>' 
        +'<img src="img/delete.svg" class="delete_zapis">'
        + '</div>'
        if (enter_list.value == ''){
            alert("Введите значение!");
            return
        }
        else{
            content.appendChild(p);
            enter_list.value = '';
            let complete = p.querySelector('.complete');
            let delete_svg = p.querySelector('.delete_zapis');
            let complete_elem = p.querySelector('span');
            
            delete_svg.addEventListener('click', function(){
                let item = this.closest('p');
                item.remove();
            })
            complete.addEventListener('click', function(){
                complete_elem.classList.toggle('complete_elem');})
            let btn_complete = document.querySelector('.btn_complete');
            let btn_nocomplete = document.querySelector('.btn_nocomplete');
            let btn_all = document.querySelector('.btn_all');
            let all_complete = p.querySelectorAll('span');
            btn_complete.addEventListener('click', function(){
                for (let i = 0; i < all_complete.length; i++){
                    if (all_complete[i].classList.contains('complete_elem')) {
                        all_complete[i].closest('p').classList.remove('hide');
                        all_complete[i].closest('p').classList.add('nohide');
                      } else {
                        all_complete[i].closest('p').classList.remove('nohide');
                        all_complete[i].closest('p').classList.add('hide');
                      }
                }})
            btn_all.addEventListener('click', function(){
                for (let i = 0; i < all_complete.length; i++){
                    if (all_complete[i].closest('p').classList.contains('hide')){
                        all_complete[i].closest('p').classList.remove('hide');
                        all_complete[i].closest('p').classList.remove('nohide');
                    }
                }
            })
            btn_nocomplete.addEventListener('click', function(){
                for (let i = 0; i < all_complete.length; i++){
                    if (all_complete[i].classList.contains('complete_elem')) {
                        // Если есть класс complete_elem, добавляем hide и убираем nohide
                        all_complete[i].closest('p').classList.add('hide');
                        all_complete[i].closest('p').classList.remove('nohide');
                      } else {
                        // Если нет класса complete_elem, добавляем nohide и убираем hide
                        all_complete[i].closest('p').classList.add('nohide');
                        all_complete[i].closest('p').classList.remove('hide');
                      }
                }
            })
            }
            
            
    })
    del.addEventListener('click', function(){
        enter_list.value = '';
    })
    
}