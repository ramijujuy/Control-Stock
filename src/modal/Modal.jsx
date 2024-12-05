import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Form1 from "react-bootstrap/Form";
import { axiosIntsance } from "../services/axios.config";

function Modall(props) {
  const detalles = props.value.dat || "";
  console.log("llega al modal", detalles);

  const initialValues = {
    id: detalles.id,
    name: detalles.name,
    description: detalles.description,
    image: detalles.image,
    stock: detalles.stock,
    price: detalles.price,
  };

  const validation = Yup.object().shape({
    name: Yup.string()
      .min(3, "too Short!!")
      .max(40, "Too long!!")
      .required("obligatorio"),
    description: Yup.string()
      .min(3, "too Short!!")
      .max(40, "Too long!!")
      .required("obligatorio"),
    image: Yup.string().required("obligatorio"),
    stock: Yup.number().required("obligatorio"),
    price: Yup.number().required("obligatorio"),
  });

  const modificar = async (datos) => {
    console.log("entro al modificar", datos);
    await axiosIntsance.put(`/${datos.id}`, datos);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modificar Articulo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            modificar(values);
            setSubmitting(false);
          }}
        >
          {({ values, isSubmitting, errors, touched, handleChange }) => (
            <Form>
              <Form1.Group className="mb-3">
                <label htmlFor="name"> Nombre del producto</label>
                <Field
                  id="name"
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  className="form-control field-input"
                  onChange={handleChange}
                />
                {errors.name && touched.name && (
                  <ErrorMessage name="name" component="div"></ErrorMessage>
                )}
              </Form1.Group>
              <Form1.Group className="mb-3">
                <label htmlFor="description"> Descripcion del producto</label>
                <Field
                  id="description"
                  type="text"
                  placeholder="Detalle"
                  name="description"
                  className="form-control field-input"
                  onChange={handleChange}
                />
                {errors.description && touched.description && (
                  <ErrorMessage
                    name="description"
                    component="div"
                  ></ErrorMessage>
                )}
              </Form1.Group>
              <Form1.Group className="mb-3">
                <label htmlFor="image"> imagen</label>
                <Field
                  id="image"
                  type="text"
                  placeholder="url imagen"
                  name="image"
                  className="form-control field-input"
                  onChange={handleChange}
                />
                {errors.image && touched.image && (
                  <ErrorMessage name="image" component="div"></ErrorMessage>
                )}
              </Form1.Group>
              <Form1.Group className="mb-3">
                <label htmlFor="stock"> Cantidad del producto</label>
                <Field
                  id="stock"
                  placeholder="Cat..."
                  name="stock"
                  className="form-control field-input"
                  onChange={handleChange}
                />
                {errors.stock && touched.stock && (
                  <ErrorMessage name="stock" component="div"></ErrorMessage>
                )}
              </Form1.Group>
              <Form1.Group className="mb-3">
                <label htmlFor="price"> Precio del producto</label>
                <Field
                  id="price"
                  placeholder="Valor"
                  name="price"
                  className="form-control field-input"
                  onChange={handleChange}
                />
                {errors.price && touched.price && (
                  <ErrorMessage name="price" component="div"></ErrorMessage>
                )}
              </Form1.Group>
              <Button className="btn btn-primary" type="submit">
                Cargar
              </Button>
              {isSubmitting ? <p>Cargando....</p> : null}
            </Form>
          )}
        </Formik>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modall;
