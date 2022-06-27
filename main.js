

function fetchData() {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
        .then(response => response.json())
        .then(data => {
            let animal = data.name;
            let scientificName = data.latin_name;
            let habitat = data.habitat;
            let lifeSpan = data.lifespan;
            let animalType = data.animal_type;
            let location = data.geo_range;
            let image = data.image_link;

            document.querySelector(".animal-img").src = image;
            document.body.style.backgroundImage = `url("${image}")`;
            document.querySelector(".animal-name").innerHTML = animal;
            document.querySelector(".animal-type").innerHTML = "Type: " + animalType;
            document.querySelector(".lifespan").innerHTML = "Lifespan: " + lifeSpan + " years";
            document.querySelector(".habitat").innerHTML = "Habitat: " + habitat;
            document.querySelector(".geo_range").innerHTML = "Found in: " + location;
            document.querySelector(".scientific-name").innerHTML = `"${scientificName}"`;

        })

    document.querySelector(".new-animal").classList.add("hide");
    setTimeout(() => {
        document.querySelector(".new-animal").innerHTML = "differnt animal?";
        document.querySelector(".new-animal").classList.remove("hide");
    }, 4000)


    document.querySelector(".animal-name").innerHTML = `Loding...`
    document.querySelector(".animal-type").innerHTML = "Type: Loding..."
    document.querySelector(".lifespan").innerHTML = "Lifespan: Loding..."
    document.querySelector(".habitat").innerHTML = "Habitat: Loding..."
    document.querySelector(".geo_range").innerHTML = "Found in: Loding..."
    document.querySelector(".scientific-name").innerHTML = `...`;
}




