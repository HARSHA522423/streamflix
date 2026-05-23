package com.streamflix.backend.repositery;

import com.streamflix.backend.entity.Movie;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository
        extends JpaRepository<Movie, Integer> {

}