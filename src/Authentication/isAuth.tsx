
"use client";
import { useRouter } from 'next/navigation'
import { userAppSelector } from "../redux/store"
import { redirect } from "next/navigation";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const router = useRouter()
    const users = userAppSelector((state) => state?.messageReducer?.user);
    if(!users.token)
        return redirect("/auth/signin");
  return <Component {...props} />;
};
}