import React, { useState } from "react";
import { Box, Button, FormGroup, MenuItem, TextField } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string, number } from "yup";
import { Link } from "react-router-dom";
import "./Forms.css";
import axios from "axios";

type FormsProps = {
  item: any;
};

const Forms: React.FC<FormsProps> = (props): JSX.Element => {
  const [status, setStatus] = useState(false);
  if (props.item) {
    return (
      <div>
        {status ? (
          <div>
            <h3>Update successfully</h3>
          </div>
        ) : (
          ""
        )}
        <div className="form-group">
          <Formik
            validationSchema={object({
              name: string()
                .required("Please fill the item's name")
                .min(6)
                .max(20),
              price: number().required().min(10),
              brand: number().required().min(0).max(5),
              description: string()
                .required("Please fill the item's description")
                .max(400),
            })}
            initialValues={props.item}
            onSubmit={async (values, formik) => {
              var status = await axios.put(
                `http://127.0.0.1:8000/api/backend/${values.id}`,
                values
              );
              if (status.status === 200) {
                setStatus(true);
                setTimeout(() => setStatus(false), 1500);
              }
            }}
            enableReinitialize={true}
          >
            {({ values, errors, isSubmitting, isValidating }) => (
              <Form>
                <Box marginBottom={5} marginLeft={20} marginRight={20}>
                  <FormGroup>
                    <Field name="name" as={TextField} value={values.name} />
                    <ErrorMessage name="name" />
                  </FormGroup>
                </Box>

                <Box marginBottom={5} marginLeft={20} marginRight={20}>
                  <FormGroup>
                    <Field
                      name="price"
                      type="number"
                      as={TextField}
                      value={values.price}
                    />
                    <ErrorMessage name="price" />
                  </FormGroup>
                </Box>

                <Box marginBottom={5} marginLeft={20} marginRight={20}>
                  <FormGroup>
                    <Field
                      name="brand"
                      // label="brand"
                      as={TextField}
                      select
                      value={+values.brand}
                    >
                      <MenuItem value={-1}>Select</MenuItem>
                      <MenuItem value={0}>Adidas</MenuItem>
                      <MenuItem value={1}>Nike</MenuItem>
                      <MenuItem value={2}>HM</MenuItem>
                      <MenuItem value={3}>Levis</MenuItem>
                    </Field>
                    <ErrorMessage name="brand" />
                  </FormGroup>
                </Box>

                <Box marginBottom={5} marginLeft={20} marginRight={20}>
                  <FormGroup>
                    <Field
                      name="description"
                      as={TextField}
                      multiline
                      rows={3}
                      rowsMax={10}
                      value={values.description}
                    />
                    <ErrorMessage name="description" />
                  </FormGroup>
                </Box>
                <Link to="/">
                  <Button>Back</Button>
                </Link>
                <Button type="submit" disabled={isSubmitting || isValidating}>
                  Finish
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Forms;
