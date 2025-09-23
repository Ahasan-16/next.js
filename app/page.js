
'use client'
import React from 'react';
import Menu from "@/components/menu";
import {useRouter} from "next/navigation";

const Page = async () => {
    const router = useRouter();
    const go=()=>{
        router.push('/product?name=apple&price=180k');
    }

    return (
        <div>
            <Menu/>
           <h1>this is home page</h1>
            <button onClick={go}>Go to product</button>
        </div>
    );
};

export default Page;