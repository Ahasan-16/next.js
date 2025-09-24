import React from 'react';
import styles from '../page.module.css'
import Menu from "@/components/menu";
const Page = () => {
    return (
        <div>
            <Menu/>
            <h1 className="head-line">This is about page</h1>
            <h4 className={styles.headLine}>this style from page.model.css</h4>
            <img src={"images/nex.webp"} alt="image"/>
        </div>
    );
};

export default Page;