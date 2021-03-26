const contenido = document.getElementById('contenido');

function traer() {
    fetch('./app/mapas.json')
        .then(res => res.json())
        .then(datos => {
            console.log(datos);
            tabla(datos)
        })
}

function tabla(datos) {
    contenido.innerHTML = '';
    for(let valor of datos) {
        contenido.innerHTML += `
            <tr>
                <th scope="row">${ valor.id }</th>
                <td>${ valor.nombre }</td>
                <td>${ valor.tier }</td>
                <td>${ valor.tipo }</td>
                <td>${ valor.cofres }</td>
                <td>${ valor.spots }</td>
            </tr>
        `
    }
}

traer();