package de.ifsb.parkhausdoku.controller;

import de.ifsb.parkhausdoku.db.AdmissionMongoDb;
import de.ifsb.parkhausdoku.model.AddAdmissionDto;
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

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;


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

        when(idUtils.randomId()).thenReturn("some-random-id");

        AddAdmissionDto addAdmissionDto = new AddAdmissionDto("some description");
        String url = "http://localhost:" + port + "/api/admission";

        HttpHeaders headers = new HttpHeaders();
        HttpEntity<AddAdmissionDto> requestEntity = new HttpEntity<>(addAdmissionDto, headers);

        // WHEN
        ResponseEntity<Admission> putResponse = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, Admission.class);

        // THEN
        Admission expectedAdmission = new Admission("some-random-id", "some description");
        assertEquals(HttpStatus.OK, putResponse.getStatusCode());
        assertNotNull(putResponse.getBody());
        assertEquals(expectedAdmission, putResponse.getBody());

        Optional<Admission> byId = db.findById("some-random-id");
        assertTrue(byId.isPresent());
        assertEquals(byId.get(), expectedAdmission);
    }

    @Test
    @DisplayName("delete by id should delete admission with id")
    public void deleteAdmissionById(){
        //GIVEN
        db.save(new Admission("1", "some Admission text"));
        db.save(new Admission("2", "some other Admission text"));

        //WHEN
        String url = "http://localhost:" + port + "/api/admission/2";
        HttpHeaders headers = new HttpHeaders();
        HttpEntity entity = new HttpEntity(headers);
        restTemplate.exchange(url,HttpMethod.DELETE,entity,Void.class);

        //THEN
        assertTrue(db.findById("2").isEmpty());
    }

    @Test
    @DisplayName("getAllAdmissions should return all Admissions")
    public void getAllAdmissions(){
        //GIVEN

        String url = "http://localhost:" + port + "/api/admission";
        db.save(new Admission("1", "some Admission text"));
        db.save(new Admission("2", "some other Admission text"));

        //WHEN
        HttpHeaders headers = new HttpHeaders();
        HttpEntity entity = new HttpEntity(headers);
        ResponseEntity<Admission[]> response = restTemplate.exchange(url, HttpMethod.GET, entity, Admission[].class);

        //THEN
        assertEquals(response.getStatusCode(), HttpStatus.OK);
        Admission[] admissions = response.getBody();
        assertEquals(admissions.length, 2);
        assertEquals(admissions[0], new Admission("1", "some Admission text"));
        assertEquals(admissions[1], new Admission("2", "some other Admission text"));
    }
}