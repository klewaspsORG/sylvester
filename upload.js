var formy=document.getElementById('formy');

formy.submit(function(e){
e.preventDefault();
var email=$('#email').val();
var pass=$('#pass').val();
check(email,pass);

if(email=="vebmate@gmail.com" && pass=="hello")
alert("Hurray...Your logged In !!");
else
alert("Sorry...You have went somewhere wrong !!");
});

function check(getEmail,getPass)
{
if(getEmail.length<=6)
alert("Invalid name");
if(getPass.lenght<=6)
alert("Invalid pass");

}