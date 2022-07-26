import { useState } from "react";
import ListadoResultados from "./ListadoResultados";
import "./App.css";
import "./styles.css";
import invoker from "./img/invoker.png";
import pudge from "./img/pudge.png";
import balanar from "./img/balanar.png";

function App() {
  const [operaciones, setOperacion] = useState([]);

  function venta(event) {
    //toma el evento de onSubmit y evita el envio de datos
    event.preventDefault();
    //recibimos los datos del formulario
    const codigo = event.target.txt_codigo.value;
    const nombre = event.target.txt_nombre.value;
    const descripcion = event.target.txt_descripcion.value;
    const precio = parseInt(event.target.txt_precio.value);
    const cantidad = parseInt(event.target.txt_cantidad.value);
    const totalVenta = precio * cantidad;
    const totalVentaDescuento = parseInt(precio * cantidad * 0.9);

    //PRECIO
    if (!Number.isInteger(precio)) {
      alert("Por favor ingrese un Precio correcto.");
      document.formulario.txt_precio.focus();
      return false;
    }

    //CANTIDAD
    if (!Number.isInteger(cantidad)) {
      alert("Por favor ingrese una Cantidad correcta.");
      document.formulario.txt_cantidad.focus();
      return false;
    }

    //Crea un objetos nuevo con los datos y resultados
    const nuevo = {
      valor1: codigo,
      valor2: nombre,
      valor3: descripcion,
      valor4: precio,
      valor5: cantidad,
      valor6: totalVenta,
      valor7: totalVentaDescuento,
    };
    //Modifica el estado con un nuevo obajeto
    setOperacion([...operaciones, nuevo]);

    //Limpia las cajas del formulario
    event.target.txt_codigo.value = "";
    event.target.txt_nombre.value = "";
    event.target.txt_descripcion.value = "";
    event.target.txt_precio.value = "";
    event.target.txt_cantidad.value = "";
  }

  return (
    <div>
      <body>
        <header>
          <div class="page-header container">
            <a href="#">
              <img src="img/dota2-icon.png" alt="" />
            </a>
          </div>
        </header>{" "}
        <br></br>
        <div className="container ">
          <h1 className="text-center">DOTA 2</h1>
          <h3 className="text-center">Defends Of The Ancients</h3>
          <br></br>
        </div>
        <div className="container ">
          <div className="row g-3">
          <div className="col-xs-12 col-sm-6 col-">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <p>Pudge</p>
                </th>
                <th scope="col">
                <p>Invoker</p>
                </th>
                <th scope="col">
                <p>Balanar</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <td><img className="imagenes" src={pudge} alt="pudge" /></td>
              <td><img className="imagenes" src={invoker} alt="pudge" /></td>
              <td><img className="imagenes" src={balanar} alt="balanar" /></td>
              
            </tbody>
            <hr></hr>
          </table>
          </div>
          </div>
        </div>
        <div className="container ">
          <h2>Ingreso de Ventas</h2>
          <br></br>
          <form onSubmit={venta}>
            <div className="row g-3">
              <div className="col-xs-12 col-sm-6">
                <label for="">Código</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Ingrese el código del producto"
                  name="txt_codigo"
                  required
                />
                <label for="">Nombre Producto</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nombre producto"
                  name="txt_nombre"
                  required
                />
                <label for="">Descripción</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Descripción producto"
                  name="txt_descripcion"
                  required
                />
                <label for="">Precio</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Precio producto"
                  name="txt_precio"
                  required
                />
                <label for="">Cantidad</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Cantidad de productos"
                  name="txt_cantidad"
                  required
                />
              </div>
            </div>
            <br></br>
            <input
              className="btn btn-primary margin-left"
              type="submit"
              value="Ingresar Venta"
            />
            <input
              type="reset"
              className="btn btn-danger"
              value="Limpiar"
            ></input>
          </form>
          </div>
          <hr></hr>
          <div className="container ">
            <h5 className="text-center">Listado de Ventas</h5>

            <ListadoResultados resultados={operaciones} />
          </div>
        
      </body>
    </div>
  );
}

export default App;
