package de.ifsb.parkhausdoku.controller;
import de.ifsb.parkhausdoku.model.AddAdmissionDto;
import de.ifsb.parkhausdoku.service.AdmissionService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/building/{buildingId}/{levelId}/admission")
@AllArgsConstructor
public class AdmissionController {

    private final AdmissionService admissionService;

    @PutMapping
    public void addAdmission(@RequestBody @Valid AddAdmissionDto dto, @PathVariable String buildingId, @PathVariable String levelId){
        admissionService.addAdmissionToBuildingAndLevel(dto,buildingId,levelId);
    }
    @DeleteMapping("{admissionId}")
    public void deleteAdmissionById(@PathVariable String admissionId, @PathVariable String buildingId, @PathVariable String levelId){
        admissionService.deleteAdmissionById(admissionId, buildingId, levelId);
    }
}




