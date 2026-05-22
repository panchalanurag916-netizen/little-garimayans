import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { Contact } from '@/lib/models/Contact'
import { sendContactReply } from '@/lib/email'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const page  = Number(searchParams.get('page')  || 1)
    const limit = Number(searchParams.get('limit') || 20)
    await connectDB()
    const [total, contacts] = await Promise.all([
      Contact.countDocuments(),
      Contact.find().sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
    ])
    return NextResponse.json({ data: { contacts, total }, success: true })
  } catch {
    return NextResponse.json({ message: 'Failed', success: false }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message, type } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Name, email, subject, and message are required', success: false }, { status: 400 })
    }

    await connectDB()
    await Contact.create({ name, email, phone, subject, message, type: type || 'general' })

    sendContactReply({ name, email, subject }).catch(console.error)

    return NextResponse.json({ message: 'Message sent successfully', success: true }, { status: 201 })
  } catch (error) {
    console.error('[Contact API]', error)
    return NextResponse.json({ message: 'Internal server error', success: false }, { status: 500 })
  }
}
