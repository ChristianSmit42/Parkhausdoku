package de.ifsb.parkhausdoku.service;

import de.ifsb.parkhausdoku.db.AdmissionMongoDb;
import de.ifsb.parkhausdoku.model.AddAdmissionDto;
import de.ifsb.parkhausdoku.model.Admission;
import de.ifsb.parkhausdoku.utils.IdUtils;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class AdmissionService {
    private final AdmissionMongoDb admissionDb;
    private final IdUtils idUtils;
    public Optional<Admission> getAdmissionById(String id) {
        return admissionDb.findById(id);
    }

    public Admission addAdmission(AddAdmissionDto data) {

        Admission admission = new Admission();
        admission.setId(idUtils.randomId());
        admission.setInformation(data.getInformation());
        return admissionDb.save(admission);
    }

    public void deleteAdmissionById(String id) {
        admissionDb.deleteById(id);
    }

    public Iterable<Admission> getAllAdmissions() {
        return admissionDb.findAll();
    }
}
