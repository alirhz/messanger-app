import Signin from "../../../../components/Auth/Signin";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign in',
  description: '...',
}


const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
