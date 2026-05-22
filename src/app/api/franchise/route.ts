import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { Franchise } from '@/lib/models/Franchise'
import { sendFranchiseConfirmation } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, email, phone, city, state, budget, propertyStatus, experience, message } = body

    if (!fullName || !email || !phone || !city || !state || !budget || !propertyStatus) {
      return NextResponse.json({ message: 'Required fields are missing', success: false }, { status: 400 })
    }

    await connectDB()

    const lead = await Franchise.create({ fullName, email, phone, city, state, budget, propertyStatus, experience, message })

    sendFranchiseConfirmation({ fullName, city, state, email }).catch(console.error)

    return NextResponse.json({ message: 'Franchise enquiry submitted successfully', data: { id: lead._id }, success: true }, { status: 201 })
  } catch (error) {
    console.error('[Franchise API]', error)
    return NextResponse.json({ message: 'Internal server error', success: false }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const page  = Number(searchParams.get('page')  || 1)
    const limit = Number(searchParams.get('limit') || 20)
    const status = searchParams.get('status')

    await connectDB()
    const query = status ? { status } : {}
    const [total, leads] = await Promise.all([
      Franchise.countDocuments(query),
      Franchise.find(query).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
    ])

    return NextResponse.json({ data: { leads, total, page, pages: Math.ceil(total / limit) }, success: true })
  } catch {
    return NextResponse.json({ message: 'Failed to fetch franchise leads', success: false }, { status: 500 })
  }
}
