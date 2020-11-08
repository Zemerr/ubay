let infoText = $('#info_text');

function hideInfoText() {
    infoText.addClass('hidden');
}

function showInfoText() {
    infoText.removeClass('hidden');
}

function setErrorText(error) {
    infoText.text(error);
    infoText.addClass('error_text');
    infoText.removeClass('success_text');
    setTimeout(hideInfoText, 5000);

}

function setSuccessText(msg) {
    infoText.text(msg);
    infoText.addClass('success_text');
    infoText.removeClass('error_text');
    setTimeout(hideInfoText, 3000);
}

//=============| Error Messages |================//
function errPassConfirm() {
    setErrorText('Passwords must match');
    showInfoText();
}

function errPassFormat() {
    setErrorText('Password may have at least 3 characters. Contains only numbers and latin letters');
    showInfoText();
}

function errLoginFormat() {
    setErrorText("Login may have 3-21 characters. Contains only numbers and latin letters");
    showInfoText();
}

//=============| Error Messages |================//
function successNewPass() {
    setSuccessText('Password was successfully changed');
    showInfoText();
}

function successNewLogin() {
    setSuccessText('Login was successfully changed');
    showInfoText();
}