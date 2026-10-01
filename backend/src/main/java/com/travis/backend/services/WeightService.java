package com.travis.backend.services;

import org.springframework.stereotype.Service;

import com.travis.backend.models.Weight;
import com.travis.backend.repos.WeightRepo;

@Service 
public class WeightService {
    private final WeightRepo repo;

    WeightService(WeightRepo repo){
        this.repo = repo;
    }

    public void addWeight(Weight weight){
        repo.save(weight);
    }
}
