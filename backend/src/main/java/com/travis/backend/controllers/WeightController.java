package com.travis.backend.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.travis.backend.models.Weight;
import com.travis.backend.services.WeightService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RequestMapping ("api/v1/")
@RestController 
@CrossOrigin
public class WeightController {

    private final WeightService serv;

    WeightController(WeightService serv){
        this.serv = serv;
    }

    @GetMapping("viewWeights")
    public ResponseEntity<List<Weight>> fetchWeights(){
        List<Weight> weights = serv.getWeights();
        if(weights != null){
            return ResponseEntity.ok(weights);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping ("logWeight")
    public ResponseEntity<Weight> logWeight(@RequestBody Weight weight){
        Weight savedWeight = serv.addWeight(weight);
        return new ResponseEntity<>(savedWeight, HttpStatus.CREATED);
    }
}