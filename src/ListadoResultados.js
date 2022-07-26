import "./styles.css"
import "./App.css"
function ListadoResultados(prop)
{
    return(
        
          <ul>
              {
                
                  prop.resultados.map((elemento)=>
                  

                  <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Código</th>
                      <th scope="col">Nombre Producto</th>
                      <th scope="col">Descripción</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Total</th>
                      <th scope="col">Total con Descuento</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>{elemento.valor1} </td>
                      <td>{elemento.valor2} </td>
                      <td>{elemento.valor3} </td>
                      <td>{elemento.valor4} </td>
                      <td>{elemento.valor5} </td>
                      <td>{elemento.valor6} </td>
                      <td>{elemento.valor7} </td>
                    </tr>
                  </tbody>

                </table>

                  )}

          </ul>
        
    );
}


export default ListadoResultados;






