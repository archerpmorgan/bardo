import React from 'react';
import { Formik } from 'formik';
import { TextField } from "@mui/material";

const AudioUploadForm = () => (
    <div>
        <h1>upload an audio file</h1>
        <Formik
            initialValues={{ name: '', file: '' }}
            validate={values => {
                const errors = {};
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                // post to backend
                console.log(values);
                setSubmitting(false);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="File Name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && touched.name && errors.name}
                    <input
                        type="file"
                        name="file"
                        accept='audio/*'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.file}
                    />
                    {errors.file && touched.file && errors.file}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    </div>
);

export default AudioUploadForm;