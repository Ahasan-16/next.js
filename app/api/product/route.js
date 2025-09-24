import {NextRequest} from "next/server";
import {NextResponse} from "next/server";
import {redirect} from "next/navigation";



export async function GET(req,res){
    return NextResponse.json(
        {
            message:"Simple json response and status code"
        },
        {
            status:400
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