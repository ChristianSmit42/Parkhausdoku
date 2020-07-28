package de.ifsb.parkhausdoku.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class DeleteAdmissionDto {
    private String admissionId;
    private String levelId;
    private String buildingId;
}