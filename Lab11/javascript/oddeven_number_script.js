function get_number(){
    let n = prompt('Enter any number : ');
    n = parseInt(n);

    if(n%2==0)
    {
        document.getElementById('num').innerHTML = n +' is a Even number';
        document.getElementById('num').style.color='green';
    }
    else{
        document.getElementById('num').innerHTML = n +' is a Odd number';
        document.getElementById('num').style.color='red';
    }
}