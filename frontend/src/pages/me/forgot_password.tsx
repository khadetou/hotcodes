import jwtDecode from "jwt-decode";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { getCookie } from "../../redux/action-creators";

const ForgotPassword: NextPage = () => {
  const { SendConfirmationEmail } = useActions();
  const { token } = useTypedSelector((state) => state.authReducer);
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    SendConfirmationEmail(email);
  };

  console.log(token);

  return (
    <div>
      <h1>Forgot Password</h1>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ForgotPassword;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie("token", ctx.req);
  if (token) {
    if (jwtDecode<any>(token).exp > Date.now() / 1000) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }
  return {
    props: {},
  };
};
