export async function fetchCars() {
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

    const headers = {
		'x-rapidapi-key': '2183f89e08mshf84b548eec725f8p13914fjsn4d2df1511328',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch(url, {headers})

    const result = await response.json()
    return result
}