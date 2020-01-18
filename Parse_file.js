let file = document.querySelector('input[type="file"]');

    	file.addEventListener('change', function(e) {
           let reader = new FileReader();
            
           reader.onload = function() {
           	  //console.log(reader.result);
           	  let img = new Image();
           	  img.src = reader.result;
              document.body.appendChild(img);
           }
           
           //reader.readAsText(file.files[0]);
           reader.readAsDataURL(file.files[0]); 
    	});