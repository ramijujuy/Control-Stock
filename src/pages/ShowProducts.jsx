import React, { useEffect, useState } from "react";
import { axiosIntsance } from "../services/axios.config";
import Tables from "../table/Table";
import Modall from "../modal/Modal";

function ShowProducts() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    async function consulta(dat) {
      const respuesta = await axiosIntsance.get("/", dat);
      setLista(respuesta.data);
    }
    consulta();
  }, []);

  return (
    <div>
      <h1>Listar Productos</h1>
      <Tables items={lista} />
    </div>
  );
}

export default ShowProducts;
