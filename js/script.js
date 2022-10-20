$(document).ready(function() {
	var usernameInput = $("#username_input");
	var passwordInput = $("#password_input");
	var btnLogin = $("#btn_login");
	var alert = $("#alert");
	var msg = $("#msg");
	var btnOk = $("#btn_ok");

	btnLogin.click(function() {
		if(usernameInput.val() == "") {
			alert.show();
			msg.text("Enter username !");
		}else if(passwordInput.val() == "") {
			alert.show();
			msg.text("Enter password !");
		}else {
			if(usernameInput.val() == "khtech") {
				if(passwordInput.val() == "9999") {
					alert.show();
					alert.css({"background":"#27ae60"});
					btnOk.css({"color":"#27ae60"})
					msg.text("Login successfully");
				}else {
					alert.show();
					msg.text("Password incorrect !");
				}
			}else {
				alert.show();
				msg.text("Username incorrect !");
			}
		}

		btnOk.click(function() {
			alert.hide();
		});
	});

});

		