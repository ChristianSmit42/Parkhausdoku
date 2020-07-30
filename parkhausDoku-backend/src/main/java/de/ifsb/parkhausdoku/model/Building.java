package de.ifsb.parkhausdoku.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "building")
public class Building {

    @Id
    private String id;
    private String objectName;
    private String ownerId;
    private List<Level> levels;
}
