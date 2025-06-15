// Example of how a component should be initialized via JavaScript
// This script logs the value of the component's text property model message to the console

(function() {
    "use strict";

	function renderUnitDetails(unit) {
	    $.ajax({
	        url: "http://localhost:8080/ms/unit/" + unit,
	        type: "GET",
	        dataType: "json",
	        success: function (data) {
	            console.log("Data retrieved successfully:", data);
				
				let html = '<table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody>';
				    for (let key in data) {
				      let value = data[key];
				      // Make the link clickable
				      if (key === "link") {
				        value = value.substring(value.lastIndexOf("/")+1, value.lastIndexOf(".html"));
						key = "Unit Id";
				      }
					  
					  if(key === 'availbleFrom') {
						value = availableDate(value);
						key = "Available from";					
					  }
				      html += '<tr><td>'+ key +'</td><td>' + value + '</td></tr>';
				    }

				    html += '</tbody></table>';	
	            $("#unitdetails").html(html);
	        },
	        error: function (xhr, status, error) {
	            console.error("Error while accessing the microservice:", error);
	            $("#unitdetails").text("Error: " + error);
	        }
	    });
	}
	
	
	const params = new URLSearchParams(window.location.search);
	const unit = params.get('unit');
	if(unit != null && unit != undefined) {
		console.log(unit);
		renderUnitDetails(unit);
	}
	
	
	function availableDate(inputDate) {
	    const today = new Date();
	    const givenDate = new Date(inputDate);

	    const formattedToday = `${today.toLocaleString('default', { month: 'short' })} ${today.getDate()}`;
	    const formattedGivenDate = `${givenDate.toLocaleString('default', { month: 'short' })} ${givenDate.getDate()}`;

	    const result = (formattedToday === formattedGivenDate) ? "Available Now" : `Available ${formattedGivenDate}`;
	    return result;
	}
}());
