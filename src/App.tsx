import axios from "axios";
import React from "react";
import "./css/bootstrap.min.css";

function App() {

  //Json datos de la peticion
  let datos = {
    IDClient: "$#HHJGUY9773H5MNKD65389745KJDFGDGG==",
    ServiceName: "AdminService",
    WSToken: "$#HHJGUYUHSDFGS546546DFH654SGHUJJFF==",
    MethodHash:
    "com.advantage.bean.account.WorkSession_loguinUsuarioWS_String_String",
    ArgumentList: [form.username, form.password],
  }

  //manejador del evento submit para evitar la actualizacion del formulario
  const handleSubmit = (e: { preventDefault: () => void; })=>{
    e.preventDefault();
  }

  //peticion mediante axios para verificar la existencia del usuario
  const handleButton =() => {
    axios({
      method: "post",
      url: "http://adminco.orangecloud.com.co/jsserver",
      data: JSON.stringify(datos),
    }).then((response) => {
      if (response.data.DataBeanProperties.ObjectValue.DataBeanProperties.Bloqueado === false){
        navigate("/bienvenido")
      }else{
        alert("datos de usuario incorrectos")
      }
    })
  }
  return (
    <div>
      <form onClick={handleSubmit}>
        <div className="form-group">
          <label>Usuario</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Clave</label>
          <input type="password" className="form-control" />
        </div>
        //aqui deberia ir la alerta de bootstrap
        <button type="submit" className="btn btn-success" onClick={handleButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
