import React, { ChangeEvent, useState, FormEvent } from "react";
import { validateFormData } from "../../utils/FormValidation";
import styles from "./LoginPage.module.css";
import Travel from "../../assets/Login/trave.jpg";
const LoginPage: React.FC = () => {
  // State management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState<string[]>([]);

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);

    if (validationErrors.length > 0) {
      setErrors(validationErrors.map((err) => `${err.field}: ${err.message}`));
    } else {
      setErrors([]);
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <div className={styles.container}>
  {/* Left side of the login page */}
  <div className={styles.imageContainer}>
    <img src={Travel} alt="Login illustration" className={styles.image} />
  </div>

  {/* Right side of the login page */}
  <div className={styles.formContainer}>
    {/* Title */}
    <div className={styles.title}>Welcome</div>

    {/* Subtitle */}
    <div className={styles.subtitle}>Please log in to continue</div>

    {/* Form */}
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Name Field */}
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}></label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          className={styles.input}
        />
      </div>

      {/* Email Field */}
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}></label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          className={styles.input}
        />
      </div>

      {/* Phone Field */}
      <div className={styles.formGroup}>
        <label htmlFor="phone" className={styles.label}></label>
        <input
          id="phone"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter your phone number"
          className={styles.input}
        />
      </div>

      {/* Password Field */}
      <div className={styles.formGroup}>
        <label htmlFor="password" className={styles.label}></label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
          className={styles.input}
        />
      </div>
      <div>
        <a href="" className={styles.signUp}>Already have an account?</a>
      </div>

      {/* Submit Button */}
      <button type="submit" className={styles.submitButton}>
        Login
      </button>

      {/* Error Messages */}
      {errors.length > 0 && (
        <ul className={styles.errorList}>
          {errors.map((error, index) => (
            <li key={index} className={styles.errorItem}>
              {error}
            </li>
          ))}
        </ul>
      )}
    </form>
  </div>
</div>

  );
};

export default LoginPage;
