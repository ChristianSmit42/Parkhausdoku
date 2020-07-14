package de.ifsb.parkhausdoku.db;

import de.ifsb.parkhausdoku.model.Admission;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface AdmissionMongoDb extends PagingAndSortingRepository<Admission,String> {
}
