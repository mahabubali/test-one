package com.test1.dev.core.services.impl;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.test1.dev.core.models.unitdetails.UnitResponse;
import com.test1.dev.core.services.FloorPlanDetailsService;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;

@Component(service = FloorPlanDetailsService.class, immediate = true)
public class FloorPlanDetailsServiceImpl implements FloorPlanDetailsService {

    private static final Logger log = LoggerFactory.getLogger(FloorPlanDetailsServiceImpl.class);

    private static final String SERVICE_URL = "http://localhost:8080/ms/floorplandetails";

    @Override
    public UnitResponse fetchFloorPlanDetails() {
        log.info("Fetching Floor Plan Details from URL: {}", SERVICE_URL);
        try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
            HttpGet request = new HttpGet(SERVICE_URL);
            try (CloseableHttpResponse response = httpClient.execute(request)) {
                if (response.getStatusLine().getStatusCode() == 200) {
                    ObjectMapper objectMapper = new ObjectMapper();
                    return objectMapper.readValue(response.getEntity().getContent(), UnitResponse.class);
                } else {
                    log.error("Failed to fetch floor plan details. Status: {}", response.getStatusLine().getStatusCode());
                }
            }
        } catch (IOException e) {
            log.error("Error while fetching floor plan details: ", e);
        }
        return null;
    }
}