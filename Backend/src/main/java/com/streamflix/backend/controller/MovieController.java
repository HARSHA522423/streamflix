package com.streamflix.backend.controller;

import com.streamflix.backend.entity.Movie;
import com.streamflix.backend.service.MovieService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@CrossOrigin("*")

public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping("/movies")
    public List<Movie> getMovies() {

        return movieService.getAllMovies();
    }

    @PostMapping("/movies")
    public Movie addMovie(@RequestBody Movie movie) {

        return movieService.saveMovie(movie);
    }
}