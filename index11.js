		document.getElementById("sub").addEventListener("click", getMoney);
		function getMoney(){
			let startingBid = parseInt(document.getElementById("bid").value, 10);

			var edu = document.getElementById("education").value;
			if(edu == 1){
				startingBid *= 1.5;
			} else if(edu == 2){
				startingBid *= 1.2;
			} else if(edu == 3){
				startingBid *= 1.05;
			} else {
				startingBid *= 0.9;
			}

			var net = document.getElementById("family").value;

			if(net == 1){
				startingBid *= 2;
			} else if(net == 2){
				startingBid *= 1.5;
			} else {
				startingBid *= 1.2;
			}
			
			if(document.getElementById("domb").checked) {
				startingBid += 100;
			}
			if(document.getElementById("cook").checked){
				startingBid += 200;
			}
			if(document.getElementById("easy").checked){
				startingBid += 150;
			}
			if(document.getElementById("sing").checked){
				startingBid += 100;
			}
			
			if(document.getElementById("jkjk").checked){
				startingBid *= 1.5;
			} else if(document.getElementById("jkjkjk").checked){
				startingBid *= 1.2;
			} else {
				startingBid *= 0.95;
			}

			
			if(document.getElementById("gossip").checked){
				startingBid *= 0.85;
			}
			if(document.getElementById("char").checked){
				startingBid *= 0.9;
			
			}
			if(document.getElementById("per").checked){
				startingBid -= 200;	
			}
            
			var name = document.getElementById("name").value;

			var output = `Your price for ${name} is a ${startingBid}`; 

			if(name != "" && startingBid != 0){

				document.getElementById("res").textContent = output;
			}
		
		}

