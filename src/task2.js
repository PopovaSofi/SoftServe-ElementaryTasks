//--------------------------TASK2--------------------------------------
function GetDataEnvelopes() {
  var a= document.forms["t2"].elements["a"].value;
  var b= document.forms["t2"].elements["b"].value;
  var c= document.forms["t2"].elements["c"].value;
  var d= document.forms["t2"].elements["d"].value;
  
  Envelopes(a,b,c,d);
  
}

function Envelopes(a,b,c,d) {
  document.getElementById('out3').value = '';

	if(isValidSides(a,b,c,d)){
		if( ((a<c)&&(b<d))||
			((a<d)&&(b<c))||
			((c<a)&&(d<b))||
			((c<b)&&(d<a)) ) {
			document.getElementById('out3').value += 'Можно вложить один конверт в другой!';
		} else {
			document.getElementById('out3').value += 'Нельзя вложить!';
		}
	} else {
		document.getElementById('out3').value += 'Значения не введены или введены некорректно!';
	}
}

function isValidSides(a,b,c,d) {
  var regExp = /^\d+$/;
  if (	regExp.test(a) &&
  	  	regExp.test(b) &&
  		regExp.test(c) &&
  		regExp.test(d)) {
    return true;  
  } else {
    return false;
  }
}