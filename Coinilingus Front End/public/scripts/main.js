console.log("My javascript file has loaded");
$(document).ready(function() {
	console.log("Wait until the DOM is ready")

	// $("#my-text").click(function() {
	// 	console.log("You clicked the div");

	// 	$(this).html("web apps are fun testing!");
	// 	$(this).addClass("small-width");
	// });

	 

	$("#view_chain").click(function() {
		console.log("You clicked the div");
		 
		$.getJSON('http://localhost:5000/chain', function(result){
			// $.each(result , function(index, item) { 
			// 	alert("Agent Id: " + result.index);
			// 	//console.log("Agent Name: " + item.agent);
			// });
		 
			var jsonPretty = JSON.stringify(result,null,2);
			console.log(jsonPretty)
			document.getElementById("json").textContent = JSON.stringify(result,null,2);
			// $.each(jsonPretty , function(index, item) { 
			// 	console.log("Agent Id: " + result.index);
			// 	//console.log("Agent Name: " + item.agent);
			// });
		  });

		//   $.ajax({
		// 	url: 'http://localhost:5000/mine',
		// 	type: "GET",
		// 	dataType: "jsonp",
		// 	success: function (data) {
		// 		alert(data);
		// 	},
		// 	crossDomain: true
		// });
	});

	$("#unmined_transactions").click(function() {
		$.getJSON('http://localhost:5000/transactions/pending', function(result){
		 
			var jsonPretty = JSON.stringify(result,null,2);
			console.log(jsonPretty)
			document.getElementById("json").textContent = JSON.stringify(result,null,2);
			 
		  });
			
		//$.post( "test.php", { name: "John", time: "2pm" } );

		// console.log("receipient address")
		// console.log("amount")
		// console.log("reward")
	});

	$("#submit").click(function() {
		console.log("You clicked the submit button");

		$("#my-text").html("creating a new transactions");
		$(this).addClass("small-width");

			
		//$.post( "test.php", { name: "John", time: "2pm" } );
// 		console.log("sender address " + sender_address.value)
// 		console.log("receipient address " + receiver_address.value)
// 		console.log("amount " + amount.value)
// 		console.log("gas " + gas.value)

// 		$.post( "http://localhost:5000/transactions/new", { sender: sender_address.value, recipient: receiver_address.value, amount: amount.value, reward: gas.value})
//   		.done(function( data ) {
//    		 alert( "Data Loaded: " + data );
//   });

  var request ={ sender: sender_address.value, recipient: receiver_address.value, amount: parseInt(amount.value), reward: parseInt(gas.value)};
    console.log(request);
    $.ajax({
        type: "POST",
        url: "http://localhost:5000/transactions/new",
        contentType: "application/json",
        data: JSON.stringify(request),
		complete: function(data) {
			var output = JSON.stringify(data,null,2)
			document.getElementById("json").textContent = JSON.stringify(data,null,2);
			alert(data.responseJSON.message)
		} ,
        crossDomain: true,
    });
	});

	$("#ledger").click(function() {
		$.getJSON('http://localhost:5000/ledger', function(result){
		 
			var jsonPretty = JSON.stringify(result,null,2);
			console.log(jsonPretty)
			document.getElementById("json").textContent = JSON.stringify(result,null,2);
			 
		  });
	});
	$("#mine").click(function() {
		$.getJSON('http://localhost:5000/mine', function(result){
		 
			var jsonPretty = JSON.stringify(result,null,2);
			console.log(jsonPretty)
			document.getElementById("json").textContent = JSON.stringify(result,null,2);
			 
		  });
		  alert("Done Mining!")
	});
	$("#save_to_disk").click(function() {
		$.getJSON('http://localhost:5000/chain', function(result){
			 
			var jsonPretty = JSON.stringify(result,null,2);
			console.log(jsonPretty)
			document.getElementById("json").textContent = JSON.stringify(result,null,2);
		 
		  });
		  alert("Create a local copy of this entire blockchain")
	});
});

