'use client'
import React from 'react';
import Link from "next/link";
import '../app/globals.css'
import {usePathname} from "next/navigation";

const Menu = () => {
    let pathname = usePathname();
    return (
        <div>
            <Link className={pathname==='/'?"active-link":"pending-link"} href='/'>Home</Link><br/>
            <Link className={pathname==='/about'?"active-link":"pending-link"} href='/about'>About</Link><br/>
            <Link className={pathname==='/product'?"active-link":"pending-link"} href='/product'>Product</Link><br/>
            <Link className={pathname==='/profile'?"active-link":"pending-link"} href='/profile'>Profile</Link>
        </div>
    );
};

export default Menu;