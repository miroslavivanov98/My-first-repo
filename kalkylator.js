/*JS Mechanics*/


function format(e){
	var keyCode = e.which;
	console.log(keyCode);
	
	if((keyCode) == 9 || (keyCode == 13)){
		return false;
	}
	
	
	
	if((keyCode) > 57 || (keyCode < 48)){
		e.preventDefault();
		return false;
	}
	
}

function submitHandler(event) {
	//console.log('Entering the arena...')
	event.preventDefault();
}

 var op1 = document.getElementById('op1');
 var op2 = document.getElementById('op2');
 var op = document.getElementById('op');
 var hasError = false;

 
 // validate op1 as numeric
 if ((NaN === parseInt(op1.value)) || (ap1.value == '')){
	 op1.style.backgroundColor ='red';
	 hasError = true;
 }
 
 
 // validate op2 as numeric
  if (NaN === parseInt(op2.value)){
	 op2.style.backgroundColor ='red';
	 hasError = true;
 }

 
 //validate op as array eleent
 var validOp = ['add','sub','mul','dev']
 if (validOp.indexOf(op.value)){
	 
 }
	
 
 //if we have error - stop here
 if (hasError) {
	 return false;
 }
 
 var result ='';
 switch (op.value){
	 case'add':
	 result = op1.value + op2.value;
	 break;
	 
	  
	 case'sub':
	 result = op1.value - op2.value;
	 break;
	 
	  
	 case'mul':
	 result = op1.value * op2.value;
	 break;
	 
	  
	 case'div':
	 result = op1.value / op2.value;
	 break;
 
 }
 
var form = document.getElementById('calc');
form.addEventListener('submit',submitHandler);
form.addEventListener('keydown',formatNumber);
 
