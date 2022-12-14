let tabla = document.getElementById("tabla");

async function obtenerDatos(){
    console.log("Buscando Datos");
    const datosApi =  await fetch("https://638a80f081df38ab345742af.mockapi.io/api/users");
    const datos = await datosApi.json();
    datos.forEach(element => {
        cargarDatos(element.nombre,element.apellido,element.trabajo);
    });
};

function cargarDatos(nombre,apellido,trabajo){
    let tr = document.createElement("tr");

    let td_apellido = document.createElement("td");
    td_apellido.textContent = apellido;
    tr.appendChild(td_apellido);

    let td_nombre = document.createElement("td");
    td_nombre.textContent = nombre+" "+apellido;
    tr.appendChild(td_nombre);

    let td_trabajo = document.createElement("td");
    td_trabajo.textContent = trabajo;
    tr.appendChild(td_trabajo);

    tabla.appendChild(tr);

}

obtenerDatos()