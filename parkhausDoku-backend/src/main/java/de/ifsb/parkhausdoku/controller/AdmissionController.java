package de.ifsb.parkhausdoku.controller;
import de.ifsb.parkhausdoku.model.AddAdmissionDto;
import de.ifsb.parkhausdoku.model.DeleteAdmissionDto;
import de.ifsb.parkhausdoku.service.AdmissionService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/admission")
@AllArgsConstructor
public class AdmissionController {

    AdmissionService admissionService;

    @PutMapping
    public void addAdmission(@RequestBody @Valid AddAdmissionDto dto){
        admissionService.addAdmissionToBuildingAndLevel(dto);
    }

    @DeleteMapping
    public void deleteAdmissionById(@RequestBody @Valid DeleteAdmissionDto dto){
        admissionService.deleteAdmissionById(dto);
    }


}




