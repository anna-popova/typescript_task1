import Buyable from './Buyable';

export default class Movie implements Buyable {
	readonly movieName: string;
	readonly year: number;
	readonly country: string;
	readonly slogan: string;
	readonly genre: object;
	readonly time: number;

	constructor(movieName: string, year: number, country: string, slogan: string, genre: object, time: number) {
		this.movieName = movieName;
		this.year = year;
		this.country = country;
		this.slogan = slogan;
		this.genre = genre;
		this.time = time;
	}
}