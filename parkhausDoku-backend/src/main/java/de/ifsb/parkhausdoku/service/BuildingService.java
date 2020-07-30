package de.ifsb.parkhausdoku.service;

import de.ifsb.parkhausdoku.db.BuildingMongoDb;
import de.ifsb.parkhausdoku.model.Building;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class BuildingService {
    private final BuildingMongoDb buildingDb;
    public Iterable<Building> getAllBuildingsByOwnerId(String ownerId) {
        return buildingDb.findBuildingByOwnerId(ownerId);
    }

    public Optional<Building> getBuildingById(String id) {
        return buildingDb.findById(id);
    }
}
