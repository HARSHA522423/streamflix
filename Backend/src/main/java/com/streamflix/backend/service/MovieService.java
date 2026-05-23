package com.streamflix.backend.service;

import com.streamflix.backend.entity.Movie;
import com.streamflix.backend.repositery.MovieRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> getAllMovies() {

        return movieRepository.findAll();
    }

    public Movie saveMovie(Movie movie) {

        return movieRepository.save(movie);
    }
}