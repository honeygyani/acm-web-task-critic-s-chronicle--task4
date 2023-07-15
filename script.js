const url = 'https://opencritic-api.p.rapidapi.com/game/reviewed-today';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dc86f3915bmsh34a3deb73c785aap1e707djsn21ca7142d998',
		'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
	}
};


async function getUsers() {
    const res = await fetch(url);
    const data = res.json();
    console.log(data);
    }
    getUsers();