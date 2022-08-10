let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

const init = () => {
    const content = dataGlasses.reduce((value, glass, index) => {
        // document.getElementById(glass.id).innerHTML= content;

        return value += `
        <img id=${glass.id} src="${glass.src}" class=" glass-button col-lg-4 p-4" alt="Girl in a jacket"  >
        `
    }, '')
    document.getElementById("vglassesList").innerHTML = content;
    // document.getElementById("vglassesList").addEventListener("click", changeGlass());

}

init()
const changeGlass = (glass) => {
    var info = document.getElementById("glassesInfo")
    document.getElementById("avatar").innerHTML = `<img src="${glass.virtualImg}"  alt="Girl in a jacket"  >`;
    info.style.display = "block";
    info.innerHTML = `<div class="card-body">
    <h5 class="card-title">${glass.name}-${glass.brand}(${glass.color})</h5>
    <button type="button" class="btn btn-danger">${glass.price}$</button>
    <p class="card-text">${glass.description}</p>

  </div>`
}
let colorPicker = document.getElementsByClassName("glass-button"),
    house = document.getElementById("avatar");

for (let i = 0; i < dataGlasses.length; i++)

    colorPicker[i].addEventListener("click", function () {
        let colorValue = dataGlasses[i]
        changeGlass(colorValue, i);
    });
