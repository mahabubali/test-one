package com.test1.dev.core.models;

import com.test1.dev.core.models.unitdetails.UnitDetails;
import com.test1.dev.core.models.unitdetails.UnitDetailsNav;
import com.test1.dev.core.models.unitdetails.UnitResponse;
import com.test1.dev.core.services.FloorPlanDetailsService;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.PostConstruct;

import java.text.NumberFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@Model(
    adaptables = Resource.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class FloorPlanDetailsModel {

    private static final Logger log = LoggerFactory.getLogger(FloorPlanDetailsModel.class);

    @Self
    private Resource resource;

    @OSGiService
    private FloorPlanDetailsService floorPlanDetailsService;

    private UnitResponse unitResponse;

    @PostConstruct
    protected void init() {
        log.info("Initializing FloorPlanDetailsModel");
        unitResponse = floorPlanDetailsService.fetchFloorPlanDetails();
    }

    public UnitDetailsNav getUnitDetailsNav() {
        return unitResponse != null ? unitResponse.getUnitDetailsNav() : null;
    }

    public List<UnitDetails> getUnitDetails() {
        if (unitResponse == null) {
            return Collections.emptyList();
        }

        // Update the availableFrom property for each unit
        List<UnitDetails> unitDetailsList = unitResponse.getUnitDetails();
        unitDetailsList.forEach(unit -> {
            updateAvailableFromMessage(unit);
            updateRate(unit);
        });
        return unitDetailsList;
    }

    private void updateAvailableFromMessage(UnitDetails unit) {
        String availableFromDate = unit.getAvailbleFrom();
        if (availableFromDate == null || availableFromDate.isEmpty()) {
            return;
        }

        try {
            // Parse the date from the given format
            SimpleDateFormat inputFormat = new SimpleDateFormat("MMM d, yyyy hh:mm:ss a", Locale.ENGLISH);
            SimpleDateFormat outputFormat = new SimpleDateFormat("MMM d", Locale.ENGLISH);
            Date parsedDate = inputFormat.parse(availableFromDate);

            // Check if the parsed date is today
            Date currentDate = new Date();
            SimpleDateFormat dayFormat = new SimpleDateFormat("yyyy-MM-dd");
            String parsedDateStr = dayFormat.format(parsedDate);
            String currentDateStr = dayFormat.format(currentDate);

            if (parsedDateStr.equals(currentDateStr)) {
                unit.setAvailbleFrom("Available Now");
            } else {
                unit.setAvailbleFrom("Available " + outputFormat.format(parsedDate));
            }
        } catch (ParseException e) {
            log.error("Error parsing availableFrom date: {}", availableFromDate, e);
        }
    }
    
    private void updateRate(UnitDetails unit) {
        double value = Double.parseDouble(unit.getRate());
        NumberFormat formatter = NumberFormat.getCurrencyInstance();
        String formattedValue = formatter.format((int) value);
        unit.setRate(formattedValue);
    }
}