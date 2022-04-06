import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import { useRouter } from "next/router";
import { getCookie } from "@/redux/action-creators";
import GoogleLogin from "react-google-login";
import jwtDecode from "jwt-decode";

const Login: NextPage = () => {
  const { SetSuccess, LoginUser, LoadUser, GoogleLoginUser } = useActions();
  const { success, isAuthenticated } = useTypedSelector(
    (state) => state.authReducer
  );
  const router = useRouter();

  const [formData, setFormData] = useState<any>({
    email: "",
    password: "",
  });

  useEffect(() => {
    LoadUser();
    if (success) {
      SetSuccess(false);
    }
    if (isAuthenticated) {
      if (router.query && router.query.from) {
        router.push(router.query.from as string);
      } else {
        router.push("/");
      }
    }
  }, [router, isAuthenticated, success]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    LoginUser(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => onSubmit(e)}>
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
        <button type="submit">Login</button>
      </form>
      <GoogleLogin
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
        buttonText="Login with Google"
        onSuccess={GoogleLoginUser}
        onFailure={(res) => console.log(res)}
      />
    </div>
  );
};

export default Login;

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
