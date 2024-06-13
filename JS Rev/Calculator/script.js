(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorALl('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button){
        button.addEventListner('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value; 
        })
    }); 
})();



