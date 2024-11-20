// src/components/ExchangeForm.js
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box } from "@mui/material";

const ExchangeForm = () => {
  const formik = useFormik({
    initialValues: {
      productName: "",
      exchangeReason: "",
    },
    validationSchema: Yup.object({
      productName: Yup.string().required("Product name is required"),
      exchangeReason: Yup.string().required("Exchange reason is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
      <TextField
        fullWidth
        id="productName"
        name="productName"
        label="Product Name"
        value={formik.values.productName}
        onChange={formik.handleChange}
        error={formik.touched.productName && Boolean(formik.errors.productName)}
        helperText={formik.touched.productName && formik.errors.productName}
        margin="normal"
      />
      <TextField
        fullWidth
        id="exchangeReason"
        name="exchangeReason"
        label="Exchange Reason"
        value={formik.values.exchangeReason}
        onChange={formik.handleChange}
        error={
          formik.touched.exchangeReason && Boolean(formik.errors.exchangeReason)
        }
        helperText={
          formik.touched.exchangeReason && formik.errors.exchangeReason
        }
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit Exchange Request
      </Button>
    </Box>
  );
};

export default ExchangeForm;
