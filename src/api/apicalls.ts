const apikey: string = '4c962a16489f390c5dfb240783c58d09';
const baseUrl: string = 'https://api.themoviedb.org/3/movie';

export const baseImagePath = (size: string, path: string) => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
}

export const nowPlayingMovies: string = 
    `${baseUrl}/now_playing?api_key=${apikey}`;

export const upcomingMovies: string = 
    `${baseUrl}/upcoming?api_key=${apikey}`;

export const popularMovies: string = 
    `${baseUrl}/popular?api_key=${apikey}`;

export const searchMovies = (keyword: string) => {
    return `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${apikey}`;
}

export const movieDetails = (id: number) => {
    return `${baseUrl}/${id}?api_key=${apikey}`;
}

export const movieCastDetails = (id: number) => {
    return `${baseUrl}/${id}/credits?api_key=${apikey}`;
}