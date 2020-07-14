package de.ifsb.parkhausdoku.service;

import de.ifsb.parkhausdoku.model.Admission;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AdmissionService {


    public static Admission getAdmissionById(String id) {
        return new Admission(
                id,
                "some Info"
        );
    }
}
