package de.ifsb.parkhausdoku.controller;

import de.ifsb.parkhausdoku.model.Admission;
import de.ifsb.parkhausdoku.service.AdmissionService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/docu")
@AllArgsConstructor
public class AdmissionController {

    AdmissionService admissionService;

    @GetMapping("{id}")
    public Admission getAdmissionById(@PathVariable String id){
        return AdmissionService.getAdmissionById(id);
    }
}
