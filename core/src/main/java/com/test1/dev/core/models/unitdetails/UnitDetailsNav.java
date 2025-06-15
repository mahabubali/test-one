package com.test1.dev.core.models.unitdetails;

public class UnitDetailsNav {

    
	private String tourImage;
	private String tourImageEnable;
    private String diagram;
    private String diagramEnable;
    private String diagramAltText;
    private String photoAltText;
    private String photo;
    private String photoEnable;
    private String photoTextval;
    private String diagramTextval;
    private String tourTextval;
    private boolean isPentHouse;

    
    public UnitDetailsNav() {

    }
    
    public UnitDetailsNav(String tourImage, String tourImageEnable, String diagram, String diagramEnable,
                          String diagramAltText, String photoAltText, String photo, String photoEnable,
                          String photoTextval, String diagramTextval, String tourTextval, boolean isPentHouse) {
        this.tourImage = tourImage;
        this.tourImageEnable = tourImageEnable;
        this.diagram = diagram;
        this.diagramEnable = diagramEnable;
        this.diagramAltText = diagramAltText;
        this.photoAltText = photoAltText;
        this.photo = photo;
        this.photoEnable = photoEnable;
        this.photoTextval = photoTextval;
        this.diagramTextval = diagramTextval;
        this.tourTextval = tourTextval;
        this.isPentHouse = isPentHouse;
    }
    
    

    // Getters and setters
    
    public String getTourImage() {
		return tourImage;
	}

	public void setTourImage(String tourImage) {
		this.tourImage = tourImage;
	}

	public String getTourImageEnable() {
		return tourImageEnable;
	}

	public void setTourImageEnable(String tourImageEnable) {
		this.tourImageEnable = tourImageEnable;
	}

	public String getDiagram() {
		return diagram;
	}

	public void setDiagram(String diagram) {
		this.diagram = diagram;
	}

	public String getDiagramEnable() {
		return diagramEnable;
	}

	public void setDiagramEnable(String diagramEnable) {
		this.diagramEnable = diagramEnable;
	}

	public String getDiagramAltText() {
		return diagramAltText;
	}

	public void setDiagramAltText(String diagramAltText) {
		this.diagramAltText = diagramAltText;
	}

	public String getPhotoAltText() {
		return photoAltText;
	}

	public void setPhotoAltText(String photoAltText) {
		this.photoAltText = photoAltText;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getPhotoEnable() {
		return photoEnable;
	}

	public void setPhotoEnable(String photoEnable) {
		this.photoEnable = photoEnable;
	}

	public String getPhotoTextval() {
		return photoTextval;
	}

	public void setPhotoTextval(String photoTextval) {
		this.photoTextval = photoTextval;
	}

	public String getDiagramTextval() {
		return diagramTextval;
	}

	public void setDiagramTextval(String diagramTextval) {
		this.diagramTextval = diagramTextval;
	}

	public String getTourTextval() {
		return tourTextval;
	}

	public void setTourTextval(String tourTextval) {
		this.tourTextval = tourTextval;
	}

	public boolean isPentHouse() {
		return isPentHouse;
	}

	public void setPentHouse(boolean isPentHouse) {
		this.isPentHouse = isPentHouse;
	}
}
