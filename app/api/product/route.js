import {NextRequest} from "next/server";
import {NextResponse} from "next/server";

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
    return NextResponse.json({name:"I am PUT"})
}
export async function PATCH(req,res){
    return NextResponse.json({name:"I am PATCH"})
}
export async function DELETE(req,res){
    return NextResponse.json({name:"I am DELETE"})
}