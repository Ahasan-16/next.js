import {NextResponse} from "next/server";

export function middleware(req){
    console.log("i am middleware");
    console.log(req.method + " " + req.url);

    if(req.nextUrl.pathname.startsWith("/api/product")){
        console.log("this is api route inside product");
        const reqHeader=new Headers(req.headers);
       const passWord= reqHeader.get('passWord');
       if(passWord==='4321')
       {
           reqHeader.set('token', '123');
           // return NextResponse.next(
           //     {
           //         request:{headers:reqHeader}
           //     }
           // );
           //uporer gola reqest er header niye kaj
           //responser er header niye kaj
           const res=NextResponse.next();
           res.headers.set('api-key','123-456');
           return res;
       }
       else {
           return NextResponse.json({message:"fail"},{status:401})
       }


    }
}
//middleware ta kon path e execute hobe na hobe oita ei kane bole dite pari
export const config={
    matcher:['/api/:path*']//api diye je gola soro hobe sobgolar jonno
}