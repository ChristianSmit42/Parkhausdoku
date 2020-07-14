package de.ifsb.parkhausdoku.controller;

import de.ifsb.parkhausdoku.model.Admission;
import de.ifsb.parkhausdoku.service.AdmissionService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RestController
@RequestMapping("/api/docu")
@AllArgsConstructor
public class AdmissionController {

    AdmissionService admissionService;

    @GetMapping("{id}")
    public Admission getAdmissionById(@PathVariable String id){
        Optional<Admission> admission = admissionService.getAdmissionById(id);
        if(admission.isPresent()){
            return admission.get();
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "admission with id: " + id + " not found");
    }
}
