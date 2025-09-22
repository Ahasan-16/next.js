'use client'
import React, {useEffect, useState} from 'react';

const Page = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        (async ()=>{
           let res=await fetch('https://dummyjson.com/posts');
           let data=await res.json();
           console.log(data);
           setData(data['posts']);
        })()
    }, []);
    return (
        <div>
            {
                data.map((item,index)=>{
                    return (
                        <div key={index}>
                            <p>{item['title']}</p>
                            <p>{item['body']}</p>
                            <br/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Page;