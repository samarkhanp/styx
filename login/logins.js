console.log('pretty patter');

function execsub() {
	var name = document.getElementById('uname').value;
	var passwd = document.getElementById('passwd').value;
	alert('You gave me: \n'+name+'\n'+passwd);
}

function register()
{
	var lg = document.getElementById('lgbx1');
	lg.style.display = "none";
	var rg = document.getElementById('rgbx1');
	rg.style.display = "block";
}