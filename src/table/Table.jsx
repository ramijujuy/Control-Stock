import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import "./Table.css";
import { useState } from "react";
import Modall from "../modal/Modal";
import { axiosIntsance } from "../services/axios.config";
import ShowProducts from "../pages/ShowProducts";

function Tables(props) {
  const [modalShow, setModalShow] = useState(false);
  const [datos, setDatos] = useState([]);

  const lista = props.items;

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Modificar</th>
          </tr>
        </thead>
        {lista.length > 0 ? (
          lista.map((dat) => (
            <tbody key={dat.id}>
              <tr>
                <td>{dat.name}</td>
                <td>{dat.description}</td>
                <td>{dat.stock}</td>
                <td>{dat.price}</td>
                <td style={{ display: "flex", justifyContent: "center" }}>
                  <i
                    className="bi bi-trash3-fill"
                    style={{ cursor: "pointer" }}
                    onClick={async (key) => {
                      await axiosIntsance.delete(`/${dat.id}`);
                      alert("item borrado");
                      <ShowProducts />;
                    }}
                  ></i>

                  <i
                    className="bi bi-pencil-square"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setModalShow(true);
                      setDatos({ dat });
                    }}
                  ></i>
                </td>
              </tr>
            </tbody>
          ))
        ) : (
          <h2>No hay datos</h2>
        )}
      </Table>
      <Modall
        show={modalShow}
        value={datos}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Tables;
