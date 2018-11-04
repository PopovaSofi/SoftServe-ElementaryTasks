//--------------------------TASK1--------------------------------------
function GetDataChessBoard(){
  var height = document.forms["t1"].elements["n"].value;
  var width = document.forms["t1"].elements["m"].value;
  var symbol = document.forms["t1"].elements["s"].value;
 
  ChessBoard(height, width, symbol);
}

function ChessBoard(height, width, symbol){ 
  document.getElementById('out').value = '';

  if (isValid(height, width)){
    for (i = 0; i < height; i++) {
      for (j = 0; j < width; j++) {
        if ((j + i) % 2 == 0){
          document.getElementById('out').value += symbol;
        }else{
          document.getElementById('out').value += ' ';
        }
      }
      document.getElementById('out').value += " \n";
    }
  }else{
    document.getElementById('out').value +='Значения не введены или введены некорректно!';
  }
}

function isValid(height,width) {
  var regExp = /^\d+$/;
  if (regExp.test(height) && regExp.test(width)) {
    for (i = 0; i < height; i++) {
      for (j = 0; j < width; j++) {
        if ((j + i) % 2 == 0){
          return true;
        } else return true;
      }
    }
  } else return false;
}
