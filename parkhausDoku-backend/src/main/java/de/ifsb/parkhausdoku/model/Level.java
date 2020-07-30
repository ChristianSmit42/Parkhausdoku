package de.ifsb.parkhausdoku.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Level {
    @Id
    private String id;
    private String level;
    private String planUrl;
    private List<Admission> admissions;
}
