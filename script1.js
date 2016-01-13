$(document).ready(function(){
    
   $('#formSubmit').click(function(){
     
        $.post("http://104.131.17.187:4004/suggestions",
                {fname: $('#fname').val(),
                 lname: $('#lname').val(),
                 message: $('#message').val(),
                 serviceName: $('#serviceName').val()
                },
                function (data) {
                    $('#message').html(data);
                }
            );
                          
                          
                          
    }); 
    
});