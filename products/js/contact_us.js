$(document).ready(function(){
    $('.input-cont button').on('click', function(){

        let fullName = $('#fullname').val(),
            email = $('#email').val(),
            mobile = $('#mobile').val(),
            message = $('#message').val();

        if(fullName.length > 3 && validateEmail(email) && validateMobile(mobile) && message.length > 3){
            // make api call
            $('.invalid-name').addClass('hide');
            $('.invalid-email').addClass('hide');
            $('.invalid-mobile').addClass('hide');
            $('.invalid-message').addClass('hide');

            let url = "http://18.221.233.168:8080";
            let data = {
                "name": fullName,
                "email": email,
                "mobile": mobile,
                "message": message
            }
            
            $.ajax({
                type: 'POST',
                url: url, 
                data: data, 
                success: function(res, status){
                    $('.model').removeClass('hide');
                    $('.sucess-conf').removeClass('hide');
                },
                error: function(res, status){
                    $('.model').removeClass('hide');
                    $('.error-conf').removeClass('hide');
                }
                }
            );
            

        }else{
            
            $('.invalid-name').addClass('hide');
            $('.invalid-email').addClass('hide');
            $('.invalid-mobile').addClass('hide');
            $('.invalid-message').addClass('hide');

            if(fullName.length < 3){
                $('.invalid-name').removeClass('hide');
            }

            
            if(!validateEmail(email)){
                $('.invalid-email').removeClass('hide');
            }
            
            if(!validateMobile(mobile)){
                $('.invalid-mobile').removeClass('hide');
            }

            if(message.length < 3){
                $('.invalid-message').removeClass('hide');
            }
        }
        
    });

    $('#sucess-btn').on('click', function(){
        $('.model').addClass('hide');
        $('.error-conf').addClass('hide');
    });

    $('#error-btn').on('click', function(){
        $('.model').addClass('hide');
        $('.error-conf').addClass('hide');
    });
});

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateMobile(mobile){
    let re = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return re.test(Number(mobile));
}
