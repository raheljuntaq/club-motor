<script>


function Login(){
var done=0;
var username=document.login.username.value;
username=username.toLowerCase();
var password=document.login.password.value;
password=password.toLowerCase();
if (username=="rahel" && password=="123456") { alert("selamat anda berhasil "); }
else 
if (done==0) { alert("Invalid login!"); }
}
</script>