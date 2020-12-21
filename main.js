const cars = [
    {
        id: 1,
        Brand: "BMW",
        Model: "i8",
        Color: "Black",
        Year: 2020,
        Price: 2140000,
        Img_URL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmwi8-mmp-1-1573836896.jpg?crop=0.949xw:0.712xh;0,0.243xh&resize=800:*",
    },
    {
        id: 2,
        Brand: "Rolls Royce",
        Model: "Phantom",
        Color: "White and Light Blue",
        Year: 2020,
        Price: 478000,
        Img_URL: "https://d1eip2zddc2vdv.cloudfront.net/dphotos/4665021-1573028148.jpg",
    }
]

function toggleHideClass(){
    //Esta función es para el formulario para agregar un auto nuevo
    const element = document.getElementById("hideThis")
    element.classList.toggle("hidden")
}
function toggleHideClassForUpdate(){
    //Esta función es para el formulario para editar un auto
    const element = document.getElementById("formToChangeProp")
    element.classList.toggle("hidden")
}

function printCars(){
    const container = document.getElementById("container-cars")
    let contentHtml = "";

    cars.forEach((car) => {
        contentHtml +=     `<tr>
                            <td>${car.Brand}</td>
                            <td>${car.Model}</td>
                            <td>${car.Color}</td>
                            <td>${car.Year}</td>
                            <td>${car.Price}</td>
                            <td><img src="${car.Img_URL}"  width="300px"></td>
                            <td><button class="btn-danger" onclick="deleteCars(${car.id})">Delete</button><br></td>
                            </tr>`} )

    container.innerHTML = contentHtml
}

function deleteCars(id){
    const index = cars.findIndex((car) => car.id == id)
    alert(`The element with the id: ${cars[index].id} it will be erased`)
    cars.splice(index,1)
    printCars()
}

function changeCarProperty(){    
    const inputId = parseInt(document.getElementById("carId").value)
    const inputBrand = document.getElementById("brandUpdate").value
    const inputModel = document.getElementById("ModelUpdate").value
    const inputColor = document.getElementById("ColorUpdate").value
    const inputYear = document.getElementById("YearUpdate").value
    const inputPrice = document.getElementById("PriceUpdate").value
    const inputImgUrl = document.getElementById("ImageUrlUpdate").value
    const index = cars.findIndex((car) => car.id == parseInt(inputId))


    if(cars[index]){
        if(inputBrand !== ""){
            cars[index].Brand = inputBrand
        }
        if(inputModel !== ""){
            cars[index].Model = inputModel
        }
        if(inputColor !== ""){
            cars[index].Color = inputColor
        }
        if(inputYear !== ""){
            cars[index].Year = parseInt(inputYear)
        }
        if(inputPrice !== ""){
            cars[index].Price = parseInt(inputPrice)
        }
        if(inputImgUrl !== ""){
            cars[index].Img_URL = inputImgUrl
        }
    } else {
        console.log(`The car with the id: ${inputId} doesn´t exist or is inaccessible` )
    }

    document.getElementById("form2").reset()
    printCars()
}

function addCar() {
    const inputBrand = document.getElementById("Brand").value
    const inputModel = document.getElementById("Model").value
    const inputColor = document.getElementById("Color").value
    const inputYear = document.getElementById("Year").value
    const inputPrice = document.getElementById("Price").value
    const inputImgUrl = document.getElementById("img_Url").value
    
    let id = 1

    if(cars.length > 0){
        id = cars[cars.length-1].id + 1
    }

    const newCar = {
        id: id,
        Brand: inputBrand,
        Model: inputModel,
        Color: inputColor,
        Year: inputYear,
        Price: inputPrice,
        Img_URL: inputImgUrl,
    }

    cars.push(newCar)
    printCars()

    document.getElementById("form1").reset()
}

printCars()