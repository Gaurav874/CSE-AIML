function getData(){
    fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response => response.json()))
    .then((data) => {
        const div = document.getElementById('jokeOutput');
        if(data.type === "single"){
            div.innerHTML = `${data.joke}`
        }
        else if(data.type === "twopart"){
            div.innerHTML == `${data.setup} - ${data.delivery}`
        }
    })
    .catch((error) => {
        div.innerHTML = 'Failed to load this page...'
    })
    function clearJoke(){
        div.innerHTML = "";
    }
}













// function getData() {
//     fetch("https://v2.jokeapi.dev/joke/Any")
//         .then((response) => response.json())
//         .then((data) => {
//             const div = document.getElementById('jokeOutput');
           
//             if (data.type === "single") {
//                 div.innerHTML = `<p>${data.joke}</p>`;
//             } else if (data.type === "twopart") {
//                 div.innerHTML = `<p>${data.setup} - ${data.delivery}</p>`;
//             }

//         })
//         .catch((error) => {
//             console.error("Error fetching joke:", error);
//             document.getElementById('jokeOutput').innerHTML = 'Failed to load a joke. Please try again.';
//         });
// }

// function clearJoke() {
//     document.getElementById('jokeOutput').innerHTML = '';
// }
