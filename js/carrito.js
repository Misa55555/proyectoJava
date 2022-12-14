    const pintarCarrito = () => {

    modalContainer.innerHTML= ""
    modalContainer.style.display= "flex"
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-titulo"> Carrito </hi>

    `
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1")
    modalButton.innerText = "X"
    modalButton.className = "modal-button"

    modalButton.addEventListener("click", ()=> {
        modalContainer.style.display= "none"
    })

    modalHeader.append(modalButton)

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modalContent"
        carritoContent.innerHTML = `
            <img class= "img" src="${product.img}">
            <h3> ${product.nombre} </h3>
            <p> ${product.precio} $</p>
            <p>cantidad: ${product.cantidad} </p>
            <p> Total: ${product.cantidad * product.precio} </p>
        `;

        modalContainer.append(carritoContent)

        let eliminar = document.createElement("span");

        eliminar.innerText = "❌";
        eliminar.className = "deleted-product";
        carritoContent.append(eliminar)

        eliminar.addEventListener("click", eliminarProducto)
    })

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    const totalCompra = document.createElement("div")
    totalCompra.className = "total-compra"
    totalCompra.innerHTML = `total a pagar: $ ${total}`
    modalContainer.append(totalCompra) 
}

verCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = () => {
    const foundId = carrito.find((Element) => Element.id)

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId
    })
    carritoContador()
    guardarLocal()
    pintarCarrito()
}

const carritoContador = () => {
    cantidadCarrito.style.display = "block"

    const carritoLength = carrito.length

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
}

carritoContador()
