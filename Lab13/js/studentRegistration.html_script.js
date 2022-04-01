function validation() {
    const fname = document.getElementById('fname').value;
    const mname = document.getElementById('mname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('emailaddress').value;
    const mobilenumber = document.getElementById('mobilenumber').value;
    const address = document.getElementById('address1').value;
    const city = document.getElementById('cityname').value;
    const pincode = document.getElementById('pincode').value;
    const state = document.getElementById('state').value;
    const pic = document.getElementById('photo_formFileSm').value;
    const result = document.getElementById('markshit_formFileSm').value;

    let submitted = true;
    document.getElementById('fn').style.display = 'none';
    document.getElementById('mn').style.display = 'none';
    document.getElementById('ln').style.display = 'none';
    document.getElementById('email_id').style.display = 'none';
    document.getElementById('mobile_id').style.display = 'none';
    document.getElementById('mobile_length').style.display = 'none';
    document.getElementById('address1_id').style.display = 'none';
    document.getElementById('city_id').style.display = 'none';
    document.getElementById('state_id').style.display = 'none';
    document.getElementById('pincode_id').style.display = 'none';
    document.getElementById('pincode_lid').style.display = 'none';
    document.getElementById('pic_id').style.display = 'none';
    document.getElementById('result_id').style.display = 'none';

    if (fname == '') {
        submitted = false;
        document.getElementById('fn').style.display = 'inline-block';
    }

    if (mname == '') {
        submitted = false;
        document.getElementById('mn').style.display = 'inline-block';
    }

    if (lname == '') {
        submitted = false;
        document.getElementById('ln').style.display = 'inline-block';
    }

    if (email == '') {
        submitted = false;
        document.getElementById('email_id').style.display = 'inline-block';
    }

    if (mobilenumber == '') {
        submitted = false;
        document.getElementById('mobile_id').style.display = 'inline-block';
    }
    else if (mobilenumber.length != 10) {
        submitted = false;
        document.getElementById('mobile_length').style.display = 'inline-block';
    }

    if (address == '') {
        submitted = false;
        document.getElementById('address1_id').style.display = 'inline-block';
    }

    if (city == '') {
        submitted = false;
        document.getElementById('city_id').style.display = 'inline-block';
    }

    if (state == 'Select') {
        submitted = false;
        document.getElementById('state_id').style.display = 'inline-block';
    }

    if (pincode == '') {
        submitted = false;
        document.getElementById('pincode_id').style.display = 'inline-block';
    }
    else if (pincode.length != 6) {
        submitted = false;
        document.getElementById('pincode_lid').style.display = 'inline-block';
    }

    if (pic == '') {
        submitted = false;
        document.getElementById('pic_id').style.display = 'inline-block';
    }

    if (result == '') {
        submitted = false;
        document.getElementById('result_id').style.display = 'inline-block';
    }

    return submitted;
}