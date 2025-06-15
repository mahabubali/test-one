import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const FloorPlanDetails = () => {
    const [unitDetails, setUnitDetails] = useState(null);
    const [error, setError] = useState(null);
	
	
	const formatDate = (dateString) => {
        const inputDate = new Date(dateString);
        const currentDate = new Date();

        // Clear time for accurate date-only comparison
        currentDate.setHours(0, 0, 0, 0);

        if (inputDate.toDateString() === currentDate.toDateString()) {
            return "Available Now";
        }

        const options = { month: "short", day: "numeric" };
        return `Available ${inputDate.toLocaleDateString("en-US", options)}`;
    };

    useEffect(() => {
        const fetchFloorPlanDetails = async () => {
            try {
                const response = await fetch('http://localhost:8080/ms/floorplandetails');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUnitDetails(data);
            } catch (err) {
                console.error('Error while accessing the microservice:', err);
                setError(err.message);
            }
        };

        fetchFloorPlanDetails();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!unitDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            
		<img
                src={unitDetails.unitDetailsNav.tourImage}              
            />
		
            <p>{unitDetails.unitDetailsNav.diagramAltText}</p>
            <table className="fp-table">
                <thead>
                    <tr>
                        <th colSpan="4">Available Units</th>
                    </tr>
                </thead>
                <tbody>
                    {unitDetails.unitDetails.map((unit) => (
                        <tr key={unit.unit}>
                            <td>Unit #{unit.unit}</td>
                            <td>Starting at ${unit.rate}</td>
                            <td>{formatDate(unit.availbleFrom)}</td>
                            <td>
                                <a href={unit.link}>VIEW UNIT</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FloorPlanDetails;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('react-fp');
    if (container) {
		console.log('inside the addEventListener');
        ReactDOM.render(<FloorPlanDetails />, container);
    }
});