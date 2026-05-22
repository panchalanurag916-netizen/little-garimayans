import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { Admission } from '@/lib/models/Admission'
import { sendAdmissionConfirmation } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { studentName, dateOfBirth, program, parentName, parentEmail, parentPhone, address, preferredBranch, visitDate, message } = body

    if (!studentName || !dateOfBirth || !program || !parentName || !parentEmail || !parentPhone || !address || !preferredBranch) {
      return NextResponse.json({ message: 'All required fields must be filled', success: false }, { status: 400 })
    }

    await connectDB()

    const admission = await Admission.create({
      studentName, dateOfBirth, program, parentName, parentEmail, parentPhone, address, preferredBranch, visitDate, message,
    })

    /* Fire & forget email */
    sendAdmissionConfirmation({ parentName, studentName, program, email: parentEmail }).catch(console.error)

    return NextResponse.json({ message: 'Application submitted successfully', data: { id: admission._id }, success: true }, { status: 201 })
  } catch (error) {
    console.error('[Admission API]', error)
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
    const [total, admissions] = await Promise.all([
      Admission.countDocuments(query),
      Admission.find(query).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
    ])

    return NextResponse.json({ data: { admissions, total, page, pages: Math.ceil(total / limit) }, success: true })
  } catch {
    return NextResponse.json({ message: 'Failed to fetch admissions', success: false }, { status: 500 })
  }
}
