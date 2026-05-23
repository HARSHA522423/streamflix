package com.streamflix.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "movies")

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "movie_id")
    private int movieId;

    private String title;

    @Column(name = "release_year")
    private int releaseYear;

    private int duration;

    private float rating;

    @Column(name = "genre_id")
    private int genreId;

    @Column(name = "image_url")
    private String imageUrl;

    private String description;
}