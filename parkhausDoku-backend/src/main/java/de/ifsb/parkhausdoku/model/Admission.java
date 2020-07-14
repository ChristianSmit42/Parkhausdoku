package de.ifsb.parkhausdoku.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
public class Admission {

    @Id
    private String id;
    private String information;

}
