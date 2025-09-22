import React from 'react';
import styles from './page.module.css'
const Page = () => {
    return (
        <div>
            <h1 className="head-line">This style from global.css file</h1>
            <h4 className={styles.headLine}>This style from page.module.css file</h4>
            <img src="/images/nex.webp" alt="images"/>
        </div>
    );
};

export default Page;