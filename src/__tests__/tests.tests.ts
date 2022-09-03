import Movie from '../Movie';
import Cart from '../Cart';

const movie = new Movie('Мстители', 2012, 'США', 'Мстители - вперед!', ['фантастика', 'приключения'], 137);

test('test for class Movie', () => {
	expect(movie).toEqual({
		movieName: 'Мстители',
		year: 2012,
		country: 'США',
		slogan: 'Мстители - вперед!',
		genre: ['фантастика', 'приключения'],
		time: 137,
		}
	);
});
