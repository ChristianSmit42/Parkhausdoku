package de.ifsb.parkhausdoku.service;

import de.ifsb.parkhausdoku.db.AdmissionMongoDb;
import de.ifsb.parkhausdoku.model.Admission;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class AdmissionService {
    private final AdmissionMongoDb admissionDb;

    public Optional<Admission> getAdmissionById(String id) {
        return admissionDb.findById(id);
    }
}
