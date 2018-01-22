$(document).ready(function(){
	// Activate tooltip
	
	var H = moment().startOf().fromNow();          // in 4 hours
	var M = moment().startOf('hour').fromNow();       // 20 minutes ago
	var mDec = M / 60;  
    
	console.log(H,M,mDec);
	var hour = H + M ; 
	
	$("#tn1").text(H);
	$("#td1").text(M);

	//$("#line1").hide();
	$("#line2").hide();
	$("#line3").hide();
	$("#line4").hide(); 
	$("#line5").hide();

	var count = 1;

    $("#save-info").on('click', function(){

		
		$("#line" + count).show();

		var H = $("#train-name").val().trim();
        var trainDest = $("#train-destination").val().trim(); 
		var trainFreq = $("#train-frequency").val().trim();
		
		//needs calculation from this point
		

		//var trainMina = $("#train-").val().trim();

		console.log(trainName);
		console.log(trainDest);
		console.log(trainFreq);
		//console.log(trainNext);
		//console.log(trainName);

		$("#tn" + count).text(trainName);
		$("#td" + count).text(trainDest);
		$("#tf" + count).text(trainFreq);
		//$("#tn" + count).text(trainNext);
		//$("#tm" + count).text(trainMina);
		count ++;





	});

	
	$('[data-toggle="tooltip"]').tooltip();
	
	// Select/Deselect checkboxes
	var checkbox = $('table tbody input[type="checkbox"]');
	$("#selectAll").click(function(){
		if(this.checked){
			checkbox.each(function(){
				this.checked = true;                        
			});
		} else{
			checkbox.each(function(){
				this.checked = false;                        
			});
		} 
	});
	checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	});
});