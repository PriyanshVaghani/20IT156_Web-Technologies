let count=0;

function increment(){
    display(++count);
}

function reset(){
    count=0;
    display(count);
}

function display(c){
    document.getElementById('counter').innerHTML = c;
}