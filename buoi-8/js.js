const APIEndpoint = "https://pokeapi.co/api/v2/pokemon/ditto";

fetch(APIEndpoint).then((response) => {
    console.log(APIEndpoint);
    return respond.json();
}).then((data) => {


    if (data.length > 0) {
        data.forEach((post) => {
            document.querySelector("#list").insertAdjacentHTML(
                "beforeend",
            '
                  <li>
                      <h1>${post.title}</h1>
                    </li>
                '     
            )
        });
    }
});