//First
let first_button = document.getElementById('first_button');
first_button.onclick = function(){
    alert('Кудреватых')
};
//Second
let first_input = document.getElementById('first_input');
let second_button = document.getElementById('second_button');
second_button.onclick = function (){
    first_input.value = Math.floor(Math.random()*10);
}
//Third
let third_button = document.getElementById('third_button');
let fourth_button = document.getElementById('fourth_button');
let second_input = document.getElementById('second_input');
let third_input = document.getElementById('third_input');
function check(){
third_button.onclick = function (){
    third_input.value = second_input.value;
    if(second_input.value === '') alert('Поле пусто!');
}
}
check();
fourth_button.onclick = function (){
    second_input.value = '';
    third_input.value = '';
}
//Fourth
document.querySelector('#fifth_button').addEventListener(('click'), () => {
    //CREATING RANDOM ARRAY
    let width = document.getElementById('fifth_input').value;
    let height = document.getElementById('fourth_input').value;
    let result = [];
    function createGround(width, height){
        for (let i = 0 ; i < height; i++) {
            result[i] = [];
            for (let j = 0; j < width; j++) {
                result[i][j] = Math.floor(Math.random()*10);
            }
        }
        return result;
    }
    let array = createGround(width,height);

    let table = document.createElement('table');
    document.body.appendChild(table);
    for( let i = 0;i< height;i++){
        let tr = document.createElement('tr');
        for( let j = 0;j< width;j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            let h1 = document.createElement('h1');
            td.appendChild(h1);
            h1.innerText = array[i][j];
        }
        table.appendChild(tr);
    }
    //document.querySelector('h1').innerHTML = `${Math.floor(Math.random()*30)}`;
})