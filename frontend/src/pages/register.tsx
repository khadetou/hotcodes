import { GetServerSideProps, NextPage } from "next";
import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";
import { useRouter } from "next/router";
import { wrapper } from "../redux";

const Register: NextPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const { error, loading, success } = useTypedSelector(
    (state) => state.authReducer
  );
  const { RegisterUser } = useActions();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords don't match");
    } else {
      RegisterUser(formData);
    }
  };

  if (success) {
    router.push("/login");
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="firstname">FirstName</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="lastname">LastName</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => onChange(e)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
