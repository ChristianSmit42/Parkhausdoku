package de.ifsb.parkhausdoku.db;

import de.ifsb.parkhausdoku.model.Building;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface BuildingMongoDb extends PagingAndSortingRepository<Building,String> {
    Iterable<Building> findBuildingByOwnerId(String id);

}