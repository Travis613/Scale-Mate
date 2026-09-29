package com.travis.backend.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.travis.backend.models.Weight;

@Repository
public interface WeightRepo extends JpaRepository<Weight, Long>{}
