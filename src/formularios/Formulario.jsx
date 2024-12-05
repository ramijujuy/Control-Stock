import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Form1 from "react-bootstrap/Form";
import "./Formulario.css";
import { axiosIntsance } from "../services/axios.config";

function Formulario() {
  const initialValues = {
    name: "",
    description: "",
    image: "",
    stock: "",
    price: "",
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

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={async (values) => {
          const datos = await axiosIntsance.post("/", values);
          datos.status = 201 ? Formulario() : alert("error");
        }}
      >
        {({ values, isSubmitting, errors, touched }) => (
          <Form>
            <Form1.Group className="mb-3">
              <label htmlFor="name"> Nombre del producto</label>
              <Field
                id="name"
                type="text"
                placeholder="Nombre"
                name="name"
                className="form-control field-input"
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
              />
              {errors.description && touched.description && (
                <ErrorMessage name="description" component="div"></ErrorMessage>
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
    </div>
  );
}

export default Formulario;
