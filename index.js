$(document).ready(function() {


    const loginBox = $('.login__box');
    const spinner = $('.login__loader--box');
    const welcomeMessage = $('.login__form--title');
    const username = $('.login__email');
    const userPassword = $('.login__password');
    const submitButton = $('.login__fields--submit');
    const wrongCredentialsWarning = $('.warning__message');


    const checkCredentials = (user, password) => {
        username.change((e) => user = e.target.value);
        userPassword.change((e) => password = e.target.value);
        submitButton.click((e) => {
            e.preventDefault();
            $.get('./accounts.json', function(data) {
            const accounts = data;
            const processedUser = accounts.find((account) => account.login === user && account.password === password);
                if(processedUser === undefined) {
                    wrongCredentialsWarning.removeClass('hidden');
                }else {
                    wrongCredentialsWarning.addClass('hidden');
                    loginBox.hide();
                    spinner.css('display', 'flex');
                    setTimeout(function() {
                        $(location).attr('href', 'todo_list.html');
                    }, 1500)
                }
            })
            
        })
    }

    
    checkCredentials();
    
    
    $('.login__expand').click(() => {
        $('.login__box').show();
    })
    
    $('.login__close--box').click(() => {
        loginBox.hide();
        username.val('');
        userPassword.val('');
        wrongCredentialsWarning.addClass('hidden');
    })
    
});
