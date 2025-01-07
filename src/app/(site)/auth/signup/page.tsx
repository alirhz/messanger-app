import Signup from "../../../../components/Auth/Signup";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up',
  description: '...',
}
 

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
