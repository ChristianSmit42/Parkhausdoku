package de.ifsb.parkhausdoku.controller;


import de.ifsb.parkhausdoku.model.Building;
import de.ifsb.parkhausdoku.service.BuildingService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/building")
@AllArgsConstructor
public class BuildingController {
    private final BuildingService buildingService;

    @GetMapping("{ownerId}")
    public Iterable<Building> getAllBuildingsByOwnerId(@PathVariable String ownerId){
        return buildingService.getAllBuildingsByOwnerId(ownerId);
    }



}
