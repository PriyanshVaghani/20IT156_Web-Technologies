function grt_fibonaci(){
    let n = prompt('Enter any number : ');
    n = parseInt(n);

    let n1=0,n2=1,ans="";

    for(let i=0;i<n;i++)
    {
        ans+=n1+' ';
        let temp = n1+n2;
        n1 = n2;
        n2 = temp;
    }
    document.getElementById('fib').innerHTML = 'First ' + n + ' number of Fibonacci series is<br/>' + ans;
    document.getElementById('fib').style.backgroundColor='red';
}