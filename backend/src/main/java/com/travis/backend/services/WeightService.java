package com.travis.backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

import com.travis.backend.models.Weight;
import com.travis.backend.repos.WeightRepo;

@Service
@AllArgsConstructor
public class WeightService {
    private final WeightRepo repo;

    public Weight addWeight(Weight weight){
        return repo.save(weight);
    }

    public List<Weight> getWeights(){
        return repo.findAll();
    }
}
