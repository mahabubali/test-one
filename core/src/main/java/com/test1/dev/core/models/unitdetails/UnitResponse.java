package com.test1.dev.core.models.unitdetails;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;


public class UnitResponse {

	@JsonProperty("unitDetailsNav")
    private UnitDetailsNav unitDetailsNav;

    @JsonProperty("unitDetails")
    private List<UnitDetails> unitDetails;
    
    // Default constructor
    public UnitResponse() {
    }
    
    @JsonCreator
    public UnitResponse(
        @JsonProperty("unitDetailsNav") UnitDetailsNav unitDetailsNav,
        @JsonProperty("unitDetails") List<UnitDetails> unitDetails
    ) {
        this.unitDetailsNav = unitDetailsNav;
        this.unitDetails = unitDetails;
    }

    

    
    // Getters and setters (or use Lombok annotations like @Data for brevity)
    public UnitDetailsNav getUnitDetailsNav() {
        return unitDetailsNav;
    }

    public void setUnitDetailsNav(UnitDetailsNav unitDetailsNav) {
        this.unitDetailsNav = unitDetailsNav;
    }

    public List<UnitDetails> getUnitDetails() {
        return unitDetails;
    }

    public void setUnitDetails(List<UnitDetails> unitDetails) {
        this.unitDetails = unitDetails;
    }
}