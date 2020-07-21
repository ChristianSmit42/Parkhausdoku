package de.ifsb.parkhausdoku.controller;

import de.ifsb.parkhausdoku.model.AddAdmissionDto;
import de.ifsb.parkhausdoku.model.Admission;
import de.ifsb.parkhausdoku.service.AdmissionService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/api/admission")
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

    @GetMapping
    public Iterable<Admission> getAllAdmissions(){
        return admissionService.getAllAdmissions();
    }

    @PutMapping
    public Admission addAdmission(@RequestBody @Valid AddAdmissionDto dto){
        return admissionService.addAdmission(dto);
    }

    @DeleteMapping("{id}")
    public void deleteAdmissionById(@PathVariable @Valid String id){
        admissionService.deleteAdmissionById(id);
    }
}
