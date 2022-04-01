function alert_input() {
    const email = document.getElementById('email_id').value;
    const password = document.getElementById('password_id').value;
    document.getElementById('email_id_error').style.display = 'none';
    document.getElementById('password_id_error').style.display = 'none';

    let submitted = true;

    if (email == '') {
        submitted = false;
        document.getElementById('email_id_error').style.display = 'inline-block';
    }

    if (password == '') {
        submitted = false;
        document.getElementById('password_id_error').style.display = 'inline-block';
    }

    return submitted;
}