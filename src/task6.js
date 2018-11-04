//--------------------------TASK6--------------------------------------
function GetRowOfNumbers() {
  var length = document.forms["t6"].elements["l"].value;
  var number = document.forms["t6"].elements["min"].value;

  Numbers(length,number);
}

function Numbers(length,number) {
  var minSquare = Math.floor(Math.sqrt(number));
  var arr, newLength = 0;

  document.getElementById('out1').value = '';
  if (isValid(length,number)) {

    if (isValidNumbers(length,number)) {
      for (i = minSquare;i <= length;i++) {
        if (i > minSquare) { 
          arr = [i]; 
          newLength = arr[0] + (length - 1); 

          for (i=arr;i<=newLength;i++){
          //for (i=minSquare+1;i<=minSquare+length-1;i++){
            document.getElementById('out1').value += i + ' ';
          }
        }
      }
    }else{
      document.getElementById('out1').value +='Значения не введены или введены некорректно!';
    }
    
  }else {
    document.getElementById('out1').value +='Введите корректные значения!';
  }
}

function isValidNumbers(length,number) {
  var regExp = /^\d+$/;
  if (regExp.test(length)&&regExp.test(number)){
    return true;  
  } else {
    return false;
  }
}

function isValid(length,number) {
  if ( number > length) {
    return false;
  } else {
    return true;
  }
}