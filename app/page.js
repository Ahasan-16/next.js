
const getData=async ()=>{
    let res=await fetch('https://dummyjson.com/posts');
    let data=await res.json();
    return data['posts'];
}


const Page = async () => {

    let data=await getData();
    return (
        <div>
            {
                data.map((item,index)=>{
                    return (
                        <div key={index}>
                            <p>{item['id']+": "+item['body']}</p>
                            <br/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Page;