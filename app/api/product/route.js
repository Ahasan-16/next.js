import {NextRequest} from "next/server";
import {NextResponse} from "next/server";
import {redirect} from "next/navigation";
import {headers} from "next/headers";



export async function GET(req,res){
    const headerList=headers();//ei gola dara reqest er header handle kora jabe,responser e null dekabe
    const token= headerList.get('token');

    return NextResponse.json(
        {
            message:"Simple json response and status code",
            token:token
        },
        {
            status:200
        }
    )
}


export async function POST(req,res){
 return NextResponse.json(
     {
         message:"Working with Headers(Response)"
     },
     {
         status:201,
         headers:{department:"CSE",session:'2019-2020',city:"chattogram"}
     }
 )
}
export async function PUT(req,res){
    return NextResponse.json(
        {
            message:"Working with Cookies(response)"
        },
        {
            status:201,
            headers:{'set-cookie':'token=123-xyz'}
        }

    )
}
export async function DELETE(req,res){
    redirect('/')
}
export async function PATCH(req,res){

}