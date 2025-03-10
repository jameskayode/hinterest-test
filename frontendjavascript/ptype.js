var d = document.getElementById('drop');
  		var dt = document.getElementById('dt');
  		var dropped = false;
  		dt.onclick = function () {
  			if(dropped == false) {
  				d.style.height = "88vh";
  				dropped = true;
  			} else {
  				d.style.height = "0";
  				dropped = false;
  			}
  		}


  var i1 = document.getElementById('i1');
  var r1 = document.getElementById('range1');
  // sqft mod next
  var s1 = document.getElementById('s1');
  var d1 = document.getElementById('d1');
  // ammenities next
  var fm1 = document.getElementById('1m1');
  var ch1 = document.getElementById('ch1');
  var fp1 = document.getElementById('1p1');

  var sm1 = document.getElementById('2m1');
  var ch2 = document.getElementById('ch2');
  var sp1 = document.getElementById('2p1');


// document.body.onload = function() {
//   r1.onchange = function () {
//   	i1.value = `${"€ ", r1.value}`;
//   }

//   s1.onchange = function () {
//   	d1.value = `${s1.value}`;
//   }
// }

 // ammenities mod code below
  function dcrs() {
  	var cs = parseInt(ch1.innerHTML);
  	if(cs > 0){cs--};
    ch1.innerHTML = cs--;
  }
 function incrs() {
  	var cs = parseInt(ch1.innerHTML);
  	cs++;
  	ch1.innerHTML = cs++;
  }
  // for the second bathroom batch
   function dicrs() {
  	var cst = parseInt(ch2.innerHTML);
  	if(cst > 0){cst--};
    ch2.innerHTML = cst--;
  }
 function hincrs() {
  	var cst = parseInt(ch2.innerHTML);
  	cst++;
  	ch2.innerHTML = cst++;
  }