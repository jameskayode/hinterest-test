var m = document.getElementById('men');
  		var r = document.getElementById('rnav');
  		var bn = document.getElementById('bn');
  		var lall = document.getElementById('lall');
  		var nl = document.getElementsByClassName('nlink');
      var swp = document.getElementById('swp');
      var cards = document.getElementsByClassName('cmain');

      console.log(cards.length);
  		nl[0].style.background = "rgba(0, 162, 255, 0.2)";
  		nl[0].style.borderRadius = "10px";
  		var down = false;
  		m.onclick = function () {
  			if(down === false) {
  				//bn.style.zIndex = "1";
          //swp.style.zIndex = "-2";
  				rnav.style.transform = "translateY(0%)";
  				down = true;
  			} else {
          //swp.style.zIndex = "auto";
  				rnav.style.transform = "translateX(300%)";
  				down = false;
  				//bn.style.zIndex = "-2";
  			}
  		}