import { GetServerSideProps, NextPage } from "next";
import { useState, useEffect } from "react";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import { useActions } from "@/hooks/useActions";
import { useRouter } from "next/router";
import { getCookie } from "store/action-creators";
import GoogleLogin from "react-google-login";
import jwtDecode from "jwt-decode";
import RegisterScreen from "@/screens/register";
import Header from "@/components/header";

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

  const { RegisterUser, GoogleLoginUser, LoadUser } = useActions();
  const { error, loading, success, user } = useTypedSelector(
    (state) => state.authReducer
  );

  useEffect(() => {
    LoadUser();
    if (user) {
      router.push("/");
    }
  }, [router, user]);

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
    <>
      <Header />
      <RegisterScreen />
    </>
  );
};

export default Register;
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
