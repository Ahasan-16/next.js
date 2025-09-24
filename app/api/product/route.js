import {NextRequest} from "next/server";
import {NextResponse} from "next/server";

export async function GET(req,res){
    return NextResponse.json({name:"I am GET"})
}
export async function POST(req,res){
    return NextResponse.json({name:"I am POST"})
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