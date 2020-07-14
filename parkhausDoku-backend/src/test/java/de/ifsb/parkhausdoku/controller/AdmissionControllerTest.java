package de.ifsb.parkhausdoku.controller;

import de.ifsb.parkhausdoku.db.AdmissionMongoDb;
import de.ifsb.parkhausdoku.model.Admission;
import de.ifsb.parkhausdoku.utils.IdUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;

import static org.junit.jupiter.api.Assertions.assertEquals;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class AdmissionControllerTest {
    @LocalServerPort
    public int port;

    @Autowired
    public TestRestTemplate restTemplate;

    @Autowired
    public AdmissionMongoDb db;

    @MockBean
    private IdUtils idUtils;

    @BeforeEach
    public void resetDatabase(){
        db.deleteAll();
    }

    @Test
    @DisplayName("getAdmissionById should return Admission")
    void getAdmissionById() {
        // GIVEN
        String url="http://localhost:"+port+"/api/admission/1";
        db.save(new Admission("1","info1"));
        // WHEN
        HttpHeaders headers = new HttpHeaders();
        HttpEntity entity = new HttpEntity(headers);
        ResponseEntity<Admission> response = restTemplate.exchange(url, HttpMethod.GET,entity,Admission.class);
        // THEN

        assertEquals(response.getStatusCode(),HttpStatus.OK);
        assertEquals(response.getBody(),new Admission("1","info1"));
    }

    @Test
    void addAdmission() {
        // GIVEN

        // WHEN

        // THEN
    }
}