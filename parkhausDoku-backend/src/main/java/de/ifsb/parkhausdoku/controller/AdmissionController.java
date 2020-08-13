package de.ifsb.parkhausdoku.controller;
import de.ifsb.parkhausdoku.model.AddAdmissionDto;
import de.ifsb.parkhausdoku.model.Admission;
import de.ifsb.parkhausdoku.service.AdmissionService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/building/{buildingId}/{levelId}/admission")
@AllArgsConstructor
public class AdmissionController {

    private final AdmissionService admissionService;

    @PutMapping
    public Admission addAdmission(@RequestBody AddAdmissionDto dto, @PathVariable String buildingId, @PathVariable String levelId){
        return admissionService.addAdmissionToBuildingAndLevel(dto,buildingId,levelId);
    }
    @DeleteMapping("{admissionId}")
    public void deleteAdmissionById(@PathVariable String admissionId, @PathVariable String buildingId, @PathVariable String levelId){
        admissionService.deleteAdmissionById(admissionId, buildingId, levelId);
    }
}




