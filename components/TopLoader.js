"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import '/app/npprogress-custom.css'
NProgress.configure({showSpinner: false});

export default function TopLoader() {
    const pathname = usePathname();
    useEffect(() => {
        NProgress.start();
        NProgress.done();
    }, [pathname]);

    return null;
}
