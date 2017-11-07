function check_info() {
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var msq = document.getElementById('textarea').value;

  if(fname=="" || lname=="" || msg=="") {
    alert('Please fill in all fields');
    return false;
  }
  else{
    return true;

  }
}
