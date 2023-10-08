import {NextResponse} from 'next-response'

export async function POST(req){
  const { name, email, occupation } = await req.json()

  console.log(name, email, occupation)

  return NextResponse.json({msg: ['hi from contact.js']})
}