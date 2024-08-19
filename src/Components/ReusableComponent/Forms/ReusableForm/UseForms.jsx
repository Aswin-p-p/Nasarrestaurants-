import { useState } from 'react';
import { z } from 'zod';

// Define the validation schema using Zod
const formSchema = z.object({
    name: z.string().min(1, "Name is required.").regex(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces."),
  email: z.string().min(1, "Email is required.").email("Email is invalid."),
  phoneNumber: z.string().min(1, "Phone number is required.").regex(/^\d{6,14}$/, "Phone number must be between 6 and 14 digits."),
  location: z.string().min(1, 'Location is required'), // Updated field
  feedback: z.string().optional() // New field
});

function useForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    location: '', // Updated field
    feedback: '' // New field
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    location: '', // Updated field
    feedback: '' // New field
  });

  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    const fieldSchema = formSchema.pick({ [name]: true });
    const result = fieldSchema.safeParse({ [name]: value });
    if (!result.success) {
      const error = result.error.format();
      return error[name]?._errors[0] || '';
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the form data
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Validate the field on blur
    const errorMessage = validateField(name, value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data with Zod
    const result = formSchema.safeParse(formData);

    if (!result.success) {
      // Extract errors from Zod validation
      const errors = result.error.format();
      setFormErrors({
        name: errors.name?._errors[0] || '',
        email: errors.email?._errors[0] || '',
        phoneNumber: errors.phoneNumber?._errors[0] || '',
        location: errors.location?._errors[0] || '', // Updated field
        feedback: errors.feedback?._errors[0] || '' // New field
      });
      return;
    }

    // Submit the form or perform further actions
    setLoading(true);
    // You can add form submission logic here
    setLoading(false);
  };

  return {
    formData,
    formErrors,
    loading,
    handleInputChange,
    handleBlur,
    handleSubmit
  };
}

export default useForm;
