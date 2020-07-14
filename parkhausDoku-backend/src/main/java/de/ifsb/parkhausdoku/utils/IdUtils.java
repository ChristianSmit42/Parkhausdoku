package de.ifsb.parkhausdoku.utils;

import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class IdUtils {
    public String randomId(){
        return UUID.randomUUID().toString();
    }

}
