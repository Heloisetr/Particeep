export interface MoviesContentType {
    id: string;
    title: string;
    category: string;
    likes: number;
    dislikes: number;
}

export interface MoviesAllDataContentType {
    movies: MoviesContentType[];
    categories: string[];
}

export interface MoviesDeletedResponseContentType {
    movies: MoviesAllDataContentType,
    deletedMovies: string[],
}