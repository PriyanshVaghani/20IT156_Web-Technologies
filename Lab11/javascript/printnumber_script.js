function get_number(){
    let n = prompt('Enter any number :');

    n = parseInt(n);
    let s="";
    for(var i=1;i<=n;i++)
    {
        s+=i+"<br/>"
    }
    document.getElementById('num').innerHTML = s;
}