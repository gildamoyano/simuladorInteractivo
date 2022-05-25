alert("Bienvenido a Calamar Swimwear")

let cantidadBikinis=Number(prompt("ingrese cantidad de bikinis"))

for (let i =0; i < cantidadBikinis; i++) {
    const modeloBikini=prompt("ingrese modelo de bikini").toLocaleLowerCase()

    function cálculo(cantidadBikinis,modeloBikini) {
        switch(modeloBikini){
            case "bora bora":
                console.log("la bikini cuesta $1200")
                break
            case "maldivas":
                console.log("la bikini cuesta $1250")
                break
            case "new york":
                console.log("la bikini cuesta $1300")    
                break
            case "rio":
                console.log("la bikini cuesta $1350")
            default:
                console.log("ingrese un modelo de bikini válido")
                break    
        }
    }

}
