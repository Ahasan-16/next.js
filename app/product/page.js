import React from 'react';
import Menu from "@/components/menu";

const Page = ({searchParams}) => {
    return (
        <div>
            <Menu/>
            <h1>this is product page</h1>
            <h2>Product Name:{searchParams.name}</h2>
            <h2>Product Price{searchParams.price}</h2>
        </div>
    );
};

export default Page;