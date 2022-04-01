function formvalidation() {
    const email = document.getElementById('email_id').value;
    const mobile = document.getElementById('mobile_id').value;
    const credit = document.getElementById('credit_id').value;
    const code = document.getElementById('zip').value;
    let flag = true;

    document.getElementById("email_errorid").style.display = "none";
    document.getElementById("email_lenid").style.display = "none";
    document.getElementById("mobile_errorid").style.display = "none";
    document.getElementById("mobile_lenid").style.display = "none";
    document.getElementById("credit_errorid").style.display = "none";
    document.getElementById("credit_lenid").style.display = "none";
    document.getElementById("zip_errorid").style.display = "none";
    document.getElementById("zip_lenid").style.display = "none";

    if (email == '') {
        document.getElementById("email_errorid").style.display = "inline-block";
        flag = false;
    }
    else if (!(/^\w{6,}@[a-zA-Z]{1,}\.[a-zA-Z]{1,}$/).test(email)) {
        document.getElementById("email_lenid").style.display = "inline-block";
        flag = false;
    }

    if (mobile == '') {
        document.getElementById("mobile_errorid").style.display = "inline-block";
        flag = false;
    }
    else if (!(/^[1-9]\d{9}$/).test(mobile)) {
        document.getElementById("mobile_lenid").style.display = "inline-block";
        flag = false;
    }

    if (credit == '') {
        document.getElementById("credit_errorid").style.display = "inline-block";
        flag = false;
    }
    else if (!(/^\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}$/).test(credit)) {
        document.getElementById("credit_lenid").style.display = "inline-block";
        flag = false;
    }

    if (code == '') {
        document.getElementById("zip_errorid").style.display = "inline-block";
        flag = false;
    }
    else if (!(/^[1-9]\d{5}$/).test(code)) {
        document.getElementById("zip_lenid").style.display = "inline-block";
        flag = false;
    }

    return flag;
}