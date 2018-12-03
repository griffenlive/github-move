var $ = function(id) {
    return document.getElementById(id);
}
var join_list = function() {
    var username = $("username").value;
    var title = $("drop_down").value;
    var lastName = $("last_name").value;
    var firstName = $("first_name").value;
    var pass1 = $("pass1").value;
    var pass2 = $("pass2").value;
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
	
	var isReady = false;

	 if (title == "") {
        $("drop_down_error").firstChild.nodeValue = "This field is required.";
		isReady = false;
    } else {
        $("drop_down_error").firstChild.nodeValue = "";
		isReady = true;
    }
	
	if (firstName == "") {
        $("first_name_error").firstChild.nodeValue = "This field is required.";
		isReady = false;
    } else {
        $("first_name_error").firstChild.nodeValue = "";
		isReady = true;
    }
	
	 if (lastName == "") {
        $("last_name_error").firstChild.nodeValue = "This field is required.";
		isReady = false;
    } else {
        $("last_name_error").firstChild.nodeValue = "";
		isReady = true;
    }
	
    if (emailAddress1 == "") {
        $("email_address1_error").firstChild.nodeValue = "This field is required.";
		isReady = false;
    } else {
        $("email_address1_error").firstChild.nodeValue = "";
		isReady = true;

    }
	 if (emailAddress1 !== emailAddress2) {
        $("email_address2_error").firstChild.nodeValue = "This entry must equal first entry.";
		isReady = false;
    } else {
        $("email_address2_error").firstChild.nodeValue = "";
		isReady = true;
    }
	
    if (username == "") {
        $("username_error").firstChild.nodeValue = "This field is required.";
		isReady = false;
    } else {
        $("username_error").firstChild.nodeValue = "";
		isReady = true;
    }

    if (pass1 == "") {
        $("pass1_error").firstChild.nodeValue = "This field is required.";
		isReady = false;
    } else {
        $("pass1_error").firstChild.nodeValue = "";
		isReady = true;
    }

    if (pass1 != pass2) {
        $("pass2_error").firstChild.nodeValue = "This entry must equal the first entry.";
		isReady = false;
    } else {
        $("pass2_error").firstChild.nodeValue = "";
		isReady = true;
    }

   


    if (ValidateEmail(emailAddress1)&& isReady == true) {
        $("email_form").submit();
    }


}

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        } else {
	$("email_address1_error").firstChild.nodeValue = "Invalid email address!";
        //alert("You have entered an invalid email address!")
        return (false)
		}
    }

window.onload = function() {
    $("join_list").onclick = join_list;
    $("drop_down").focus();
}