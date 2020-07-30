package de.ifsb.parkhausdoku.service;

import de.ifsb.parkhausdoku.db.BuildingMongoDb;
import de.ifsb.parkhausdoku.model.*;
import de.ifsb.parkhausdoku.utils.IdUtils;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
@AllArgsConstructor
public class AdmissionService {
    private final BuildingMongoDb buildingDb;
    private final IdUtils idUtils;
    private final BuildingService buildingService;

    private Level getLevelById(Building building, String id) {
        Level actualLevel = building.getLevels().stream().filter(level -> id.equals(level.getId())).findAny().orElse(null);
        if (actualLevel != null) {
            return actualLevel;
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Level with id: " + id + " not found");
    }

    private Building getBuildingById(String id) {
        Optional<Building> optionalBuilding = buildingService.getBuildingById(id);
        if (optionalBuilding.isPresent()) {
            return optionalBuilding.get();
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Building with id: " + id + " not found");
    }

    private Admission getAdmissionById(Level level, String id) {
        Admission actualAdmission = level.getAdmissions().stream().filter(admission -> id.equals(admission.getId())).findAny().orElse(null);
        if (actualAdmission != null) {
            return actualAdmission;
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Admission with id: " + id + " not found");
    }

    public void addAdmissionToBuildingAndLevel(AddAdmissionDto data, String buildingId, String levelId) {
        Building building = getBuildingById(buildingId);
        Level level = getLevelById(building, levelId);

        Admission admission = new Admission();
        admission.setId(idUtils.randomId());
        admission.setInformation(data.getInformation());
        building.getLevels().remove(level);
        level.getAdmissions().add(admission);
        building.getLevels().add(level);
        buildingDb.save(building);
    }

    public void deleteAdmissionById(String admissionId, String buildingId, String levelId) {
        Building building = getBuildingById(buildingId);
        Level level = getLevelById(building, levelId);
        Admission admission = getAdmissionById(level, admissionId);

        building.getLevels().remove(level);
        level.getAdmissions().remove(admission);
        building.getLevels().add(level);
        buildingDb.save(building);
    }
}

