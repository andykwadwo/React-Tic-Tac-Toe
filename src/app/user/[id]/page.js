"use client";
import { useRouter } from "next/navigation";

export default function Contact({params}){
    const router = useRouter();
    return (
    <div>
        <h1>{params.id}</h1>
        <button onClick={router.back}>Go Back</button>
    </div>
    );
}