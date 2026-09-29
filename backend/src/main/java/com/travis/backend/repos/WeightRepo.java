package com.travis.backend.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.travis.backend.models.Weight;

public interface WeightRepo extends JpaRepository<Weight, Long>{}
