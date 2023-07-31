import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Auth",
    description: "Authentication page"
}

export default function AuthLayout({children}: {children: React.ReactNode}) {
    return <section className="flex justify-center items-center h-full">
        {children}
    </section>
}