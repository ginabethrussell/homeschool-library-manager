import { useState } from 'react';

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const handleChange = (name, value) => {
        setValues({
            ...values,
            [name]: value
        })
    }
    const clearValues = () => {
        setValues(initialValues)
    }
    return [values, handleChange, clearValues];
}