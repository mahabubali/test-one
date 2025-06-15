package com.test1.dev.core.models.unitdetails;

public class UnitDetails {

    private String unit;
   

	private String rate;
    private String maxSquareFeet;
    private String unitSqFt;
    private String minSquareFeet;
    private String link;
    private String availbleFrom;
    
    public UnitDetails() {

    }

    public UnitDetails(String unit, String rate, String maxSquareFeet, String unitSqFt,
                       String minSquareFeet, String link, String availbleFrom) {
        this.unit = unit;
        this.rate = rate;
        this.maxSquareFeet = maxSquareFeet;
        this.unitSqFt = unitSqFt;
        this.minSquareFeet = minSquareFeet;
        this.link = link;
        this.availbleFrom = availbleFrom;
    }

    // Getters and setters
    public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public String getRate() {
		return rate;
	}

	public void setRate(String rate) {
		this.rate = rate;
	}

	public String getMaxSquareFeet() {
		return maxSquareFeet;
	}

	public void setMaxSquareFeet(String maxSquareFeet) {
		this.maxSquareFeet = maxSquareFeet;
	}

	public String getUnitSqFt() {
		return unitSqFt;
	}

	public void setUnitSqFt(String unitSqFt) {
		this.unitSqFt = unitSqFt;
	}

	public String getMinSquareFeet() {
		return minSquareFeet;
	}

	public void setMinSquareFeet(String minSquareFeet) {
		this.minSquareFeet = minSquareFeet;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public String getAvailbleFrom() {
		return availbleFrom;
	}

	public void setAvailbleFrom(String availbleFrom) {
		this.availbleFrom = availbleFrom;
	}
    
}