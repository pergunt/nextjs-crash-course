import {NextResponse, NextRequest} from 'next/server'

export const GET = async () => {
  return NextResponse.json({
    message: 'Hello from api!',
  })
}

export const POST = async (req: NextRequest) => {
  const data = await req.json() as {name: string}

  return NextResponse.json({
    message: `Hello ${data.name}`,
  })
}
