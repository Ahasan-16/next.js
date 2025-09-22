import React from 'react';
import styles from '../page.module.css'
const Page = () => {
    return (
        <div>
            <h1 className="head-line">This is about page</h1>
            <h4 className={styles.headLine}>this style from page.model.css</h4>
        </div>
    );
};

export default Page;