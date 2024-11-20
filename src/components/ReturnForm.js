// src/components/ReturnForm.js
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box } from "@mui/material";

const ReturnForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      reason: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Product name is required"),
      reason: Yup.string().required("Reason is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Product Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        margin="normal"
      />
      <TextField
        fullWidth
        id="reason"
        name="reason"
        label="Reason"
        value={formik.values.reason}
        onChange={formik.handleChange}
        error={formik.touched.reason && Boolean(formik.errors.reason)}
        helperText={formik.touched.reason && formik.errors.reason}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default ReturnForm;
