function GetPalindrom() {
  var n = document.forms["reg"].elements["name"].value;

  checkPalindrome(n);
}

var reversed;
function checkPalindrome(n) {    
  document.getElementById('out2').value = '';

  if(isValidPalindrom(n)) {
    for (i = 0; i < n.length; i++) {
      for (j = 0; j < n.length; j++) {
      	var p = n.slice(i,j + i + 1);
        reversed = p.split('').reverse().join('');

       	if(Verification(p)) {
          document.getElementById('out2').value +=p+'\n';
        }
      }
    }
    document.getElementById('out2').value +=0;
  }else{
    document.getElementById('out2').value +='Значения не введены или введены некорректно!';
  }
}

function isValidPalindrom(n) {
  var regExp = /^\d+$/;

  if (n.length>1){

    if (regExp.test(n)){
      return true;
    } else { 
      return false;
    } 

  } else {
    return false;
  }
}

function Verification(p) {
	if (p == reversed && p.length>1) {
		return true;
	} else {
		return false;
	}
}
