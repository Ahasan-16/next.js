import {NextRequest} from "next/server";
import {NextResponse} from "next/server";
import {headers} from "next/headers";
//working with Reqeust
export async function GET(req,res){
    const {searchParams} = new URL(req.url);
    const name=searchParams.get('name');
    const id=searchParams.get('Id');
    return NextResponse.json({name:name,id:id})
}
export async function POST(req,res){
     const JsonBody=await req.json();
     const name=JsonBody.name;
     const city=JsonBody.city;
    return NextResponse.json({name:name,city:city})
}
export async function PUT(req,res){
    const formData= await req.formData();
    const name=formData.get('name');
    const department=formData.get('Department');
    return NextResponse.json({name:name,department:department});
}
export async function PATCH(req,res){
    const Header=headers();
    const firstName=Header.get('firstName');
    const lastName=Header.get('lastName');
    return NextResponse.json({firstName:firstName,lastName:lastName});
}
export async function DELETE(req,res){
    return NextResponse.json({name:"I am DELETE"})
}