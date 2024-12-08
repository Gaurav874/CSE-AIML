// function getData(){
//     fetch("https://api.github.com/users").then((response)=>{
//       console.log(response);
//     })
// }






function getData(){
    fetch("https://api.github.com/users/Gaurav874")
    .then((response) => response.json())
    .then((data)=>{
        const div = document.getElementById("parent");
        // const av = document.getElementById("avatar");
        // av.style.display = "none";
        div.innerHTML = `<h2>${data.name}</h2>
        <p><strong>Username:</strong> ${data.login}</p>
        <p><strong>bio:</strong> ${data.bio}</p>
        <p><strong>public repo:</strong> ${data.public_repos}</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcyIzz2XHx17Wzb1GmWtxQrJG50YA5xVpGzg&s"/>`

    })
}






// 1. function call
// 2. fetch AudioParam
// 3. response ko json me convert 
// 4. response ka jo data hn uski jaga bnana aur value print krna
// 5. error ko catch krna 
// 6. clear function call




// const getData = () => {
//     fetch(33)
//       .then((res) => res.json())
//       .then((data) => {
//         display(data);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   };
  
  
//   const display = (data) => {
//     const parentDiv = document.getElementById("parent");
//     const avatarImg = document.getElementById("avatar");
//     avatarImg.style.display = "none";
//     parentDiv.innerHTML = `
//       <h2>${data.name}</h2>
//       <p><strong>Username:</strong> ${data.login}</p>
//       <p><strong>Bio:</strong> ${data.bio}</p>
//       <p><strong>Public Repos:</strong> ${data.public_repos}</p>
//       <img src="${data.avatar_url}" alt="Avatar" width="150" />
//     `;
//   };












// function getData(){
//     fetch("https://api.github.com/users/Gaurav874")
//       .then((response)=>{const data = response.json();
//       console.log(data)
//      return data;
//     }).then((data)=>{
//         const div = document.getElementById("parent");
//         const av = document.getElementById("avatar");
//         av.style.display = "none";
//         div.innerHTML = `<h2>${data.name}</h2>
//         <p><strong>Username:</strong> ${data.login}</p>
//         <p><strong>bio:</strong> ${data.bio}</p>
//         <p><strong>public repo:</strong> ${data.public_repos}</p>
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcyIzz2XHx17Wzb1GmWtxQrJG50YA5xVpGzg&s"/>`

//     })
// }
