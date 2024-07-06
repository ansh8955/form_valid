# React Form with Formik and Yup

## Overview
Formik is a popular form library for React that simplifies form management with robust validation, while Yup is a schema validation library used seamlessly with Formik to ensure data integrity and user input validation.

## Project Description
This project demonstrates how to create a form in React using Formik and Yup with the following features:

1. **Email Field**: Requires a valid email format.
2. **Password Field**: Requires the password "rishiME@199".
3. **Submit Button**: Initially disabled, enabling only when both fields have valid input.
4. **Error Messages**: Displayed within the input fields for user guidance.

## Getting Started

### Prerequisites

- npm (version 6 or later) or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/react-formik-yup.git
   cd react-formik-yup

   Usage
The form includes two fields and a submit button:

Email: Enter a valid email address.
Password: Enter the password "rishiME@199".
Submit Button: The button is disabled until valid input is provided in both fields. Upon valid input, the button becomes enabled.
Form Validation
Email Validation: Uses Yup's string().email() to ensure the email is in the correct format.
Password Validation: Uses Yup's string().oneOf(["rishiME@199"]) to ensure the password matches the specified string.
Displaying Error Messages
Error messages are displayed within the input fields to guide the user on the necessary corrections.

Submission Guidelines
Submit the GitHub repository link and the hosted link as follows:

GitHub Repository: Provide a link to your repository on GitHub with a detailed README.md.
Hosted Link: Host your application (e.g., on Vercel, Netlify, GitHub Pages) and provide the link.
Example:

GitHub Repository: https://github.com/your-username/react-formik-yup
Hosted Link: https://your-app-hosted-link.com
License
Distributed under the MIT License. See LICENSE for more information.

Contact
Your Name - upadhyayaansh094@gmail.com

Project Link: https://github.com/your-username/react-formik-yup
