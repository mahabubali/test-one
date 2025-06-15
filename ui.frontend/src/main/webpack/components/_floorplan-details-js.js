// Example of how a component should be initialized via JavaScript
// This script logs the value of the component's text property model message to the console

(function() {
    "use strict";

	function renderFloorPlanDetails() {
	    $.ajax({
	        url: "http://localhost:8080/ms/floorplandetails",
	        type: "GET",
	        dataType: "json",
	        success: function (response) {
	            console.log("Data retrieved successfully:", response);
	            var unitDetailsHTML = "<img src=" + response.unitDetailsNav.tourImage + " alt='Tour Image' /><p>" + response.unitDetailsNav.diagramAltText + 
	    		"</p><table class='fp-table'><thead><tr><th colspan='4'>Available Units</th></tr></thead><tbody>";
	          	response.unitDetails.forEach(unit => {
	          		//unitDetailsHTML = unitDetailsHTML + "<tr><td>Unit #" + unit.unit + "</td><td>Starting at $" + unit.rate + "</td><td>" + availableDate(unit.availbleFrom) + "</td><td><a href="+ unit.link + ">VIEW UNIT</a></td></tr>";					
					unitDetailsHTML = unitDetailsHTML + "<tr><td>Unit #" + unit.unit + "</td><td>Starting at $" + unit.rate + "</td><td>" + availableDate(unit.availbleFrom) 
					+ "</td><td><a href=/content/test1/us/en/unitdetails.html?unit="+ unit.unit + ">VIEW UNIT</a></td></tr>"
	          	});
	          	unitDetailsHTML = unitDetailsHTML + "</tbody></table>";
	            $("#output").html(unitDetailsHTML);
	        },
	        error: function (xhr, status, error) {
	            console.error("Error while accessing the microservice:", error);
	            $("#output").text("Error: " + error);
	        }
	    });
	}
	
	function availableDate(inputDate) {
	    const today = new Date();
	    const givenDate = new Date(inputDate);

	    const formattedToday = `${today.toLocaleString('default', { month: 'short' })} ${today.getDate()}`;
	    const formattedGivenDate = `${givenDate.toLocaleString('default', { month: 'short' })} ${givenDate.getDate()}`;

	    const result = (formattedToday === formattedGivenDate) ? "Available Now" : `Available ${formattedGivenDate}`;
	    return result;
	}
	
	renderFloorPlanDetails();
}());
