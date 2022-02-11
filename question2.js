// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=d0281c8cdd934823b89cd389d1300ade";
const output = document.querySelector("#output");

const getGames = (list) => {
    console.log(list);

    output.innerHTML = "";

    for (let i = 0; i < 8; i++) {
        let newLi = `
        <li>
            <h2>${list[i].name}</h2>
            <p><strong>Rating: </strong>${list[i].rating}<p/>
            <p><strong>Tags: </strong>${list[i].tags.length}
        </li>`;

        output.innerHTML += newLi;
    }
}

fetch(url)
.then(response => response.json())
.then(list => getGames(list.results))
.catch(err => console.error("Error: " + err))