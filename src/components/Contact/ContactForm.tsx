"use client";

import React, { useState } from "react";

import { Button, Box, TextField, Snackbar } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config.js";

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

/**
 * Form data interface
 */
interface FormState {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

const ContactForm: React.FC = () => {
  /**
   * State manager for snackbar
   */
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarText, setSnackbarText] = useState("Detials saved");

  /**
   * Snackbar Handler
   */
  const handleSnackbarClick = () => {
    setSnackbarOpen(true);
  };

  /**
   * Snackbar Handler
   */
  const handleSnackbarClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const [value, setValue] = useState("");

  /**
   * To change the selcted country to user specific country
   * @param {*} newValue: Expects a country value
   */
  const handlePhoneChange = (newValue: any, info: any) => {
    setValue(newValue);
    setFormData({ ...formData, mobile: info.numberValue });
  };

  /**
   * Form data
   */
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  /**
   * Variables for Email validation
   * State manager
   * Email regex
   */
  const [emailError, setEmailError] = useState(false);
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Za-z]{2,}$/i;

  /**
   * To populate the formData
   * @param e: React change event
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmailError(!emailRegex.test(value));
    }

    setFormData({ ...formData, [name]: value });
  };

  /**
   * To handle form submission
   * @param {*} e: React form event
   */
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSnackbarText("Details saved");

    if (emailError === true) {
      setSnackbarText("Please enter a valid email");
      handleSnackbarClick();
      return;
    }

    // Handle form submission logic here
    try {
      const docRef = await addDoc(collection(db, "contactFormData"), formData);
      sendEmail(formData);
      handleSnackbarClick()
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
      setValue("") //Set country value to null after form submission  
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * 
   * @param data 
   * @returns 
   */
  const sendEmail = async (data: FormState) => {
    const templateParams = {
      to_name: 'Dhruv',
      from_name: data.name,
      phone: data.mobile,
      email: data.email,
      message: data.message,
    };
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        },
      );
    } 
    catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EMAILJS FAILED...', err);
        return;
      }
      console.log("Error ", err)
    }
  }

  return (
    <div className="container mt-6 md:mt-20">
      <div className="contact-title  font-bold">
        <h2 className="gap-4 py-10 ">Request a Demo</h2>
      </div>
      <form onSubmit={handleFormSubmit}>
        <Box
          sx={{
            "& .MuiButton-root": { mt: 1, mb: 2 },
            "& .MuiTextField-root": { my: 1 },
          }}
        >
          <TextField
            id="indexFormName"
            label="Name"
            name="name"
            value={formData["name"]}
            variant="outlined"
            required
            fullWidth
            onChange={handleChange}
          />
          <TextField
            id="indexFormEmail"
            label="Email"
            name="email"
            value={formData["email"]}
            variant="outlined"
            required
            fullWidth
            error={emailError}
            onChange={handleChange}
          />

          <MuiTelInput
            defaultCountry="IN"
            name="mobile"
            placeholder="Mobile"
            value={value}
            required
            fullWidth
            onChange={handlePhoneChange}
          />

          <TextField
            label="Message"
            name="message"
            value={formData["message"]}
            multiline
            maxRows={1}
            required
            fullWidth
            onChange={handleChange}
          />

          <div className="flex flex-col items-center justify-center text-center">
            <Button
              type="submit"
              className="btn btn-primary"
              variant="contained"
            >
              Submit
            </Button>
          </div>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
            message={snackbarText}
          />
        </Box>
      </form>
    </div>
  );
};

export default ContactForm;
