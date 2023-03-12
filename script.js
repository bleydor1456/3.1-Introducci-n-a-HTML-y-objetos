// contructor
class Dato {
    constructor(nombre, libro, autor) {
        this.nombre = nombre;
        this.libro = libro;
        this.autor = autor;
    }
}
// variable del array
const datos = [];

// funcion para agregar dato hacia el array 
function agregar() {
    var nombre = document.getElementById("nom").value;
    var titulo = document.getElementById('titulo').value;
    var autor = document.getElementById('aut').value;

    const dato = new Dato(nombre, titulo, autor);
    datos.push(dato);
    alert('nuevo dato registrado')
    console.log(dato);
}

//funcion para buscar en el array datos
function buscar() {

    try {
        var nombre = document.getElementById("nom").value;
        var res = datos.find(Dato => Dato.nombre == nombre);

        var div = document.getElementById("aka");
        div.innerHTML = `
    
    <p><span>Nombre de la persona: </span> `+ res.nombre + `</p>
    <p><span>Titulo del libro: </span> `+ res.libro + `</p>
    <p><span>Autor del libro: </span> `+ res.autor + `</p>

    
    `;
    } catch (error) {
        alert('Registro no encontrado');
    }
}


