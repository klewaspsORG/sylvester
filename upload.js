var formy=document.getElementById('formy');
formy.submit(function(e){
e.preventDefault();
var email=$('#email').val();
var pass=$('#pass').val();

if(email=="vebmate@gmail.com" && pass=="hello")
alert("Hurray...Your logged In !!");
else
alert("Sorry...You have went somewhere wrong !!");
});

