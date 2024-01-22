# The Movie Database

Welcome to my single page React.js application for the movie database. This repository contains the front-end component for displaying The Movie Database and the REST API for retrieving the data about the most recent movies from the open source database. The movie database was built using React, REST API, JavaScript, Bootstrap, CSS, and HTML.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Overview

This project presents a movie database, allowing users to explore various movies. It provides the ability to add movies to a wishlist and learn more details about each movie, including its description, release year, director, actors, comments, and rating. On the dedicated movie page, users can both read the details or click for an audio description in case of difficulty reading the material.

## Features

- **Movie gallery**: Showcase the most recent and highly-rated movies.
- **Movie Page**: Provide detailed information about the movie, reviews, and rating, a service for listening to the description, and the ability to add to the wishlist.
- **Wishlist**: Display movies that have been added to the wishlist with the ability to filter and sort them. The wishlist is based on localStorage.

## Installation

### Front-end (React)

1. Clone the repository:

   ```bash
   git clone https://github.com/KatieCod/TMDB.git

2. Navigate to the front-end directory:

   cd TMDB

3. Install dependencies:

   npm install

4. Start the development server:

   npm start

## Usage

  Open your web browser and go to http://localhost:3000 to access the front-end.
  
### API URLs

API_URL="https://api.themoviedb.org/3/movie/popular?api_key=8d97210e6edd66eb9e967278325836d0"

API_IMG="https://image.tmdb.org/t/p/w500/"

API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=8d97210e6edd66eb9e967278325836d0&query"

API_TV = "https://api.themoviedb.org/3/tv/popular?api_key=8d97210e6edd66eb9e967278325836d0"

## Folder Structure

### e-commerce-website_FE/

|-- public/  
|-- src/  
|-- package.json  
|-- package-lock.json.json  
|-- .gitignore  
|-- README.md  




