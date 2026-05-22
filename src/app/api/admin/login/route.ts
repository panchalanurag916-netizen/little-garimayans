import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { Admin } from '@/lib/models/Admin'
import { signToken, COOKIE_NAME_EXPORT } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password required', success: false }, { status: 400 })
    }

    await connectDB()
    const admin = await Admin.findOne({ email: email.toLowerCase(), active: true }).select('+password')

    if (!admin) {
      return NextResponse.json({ message: 'Invalid credentials', success: false }, { status: 401 })
    }

    const valid = await admin.comparePassword(password)
    if (!valid) {
      return NextResponse.json({ message: 'Invalid credentials', success: false }, { status: 401 })
    }

    /* Update last login */
    admin.lastLogin = new Date()
    await admin.save()

    const token = signToken({ id: admin._id.toString(), email: admin.email, role: admin.role })

    const res = NextResponse.json({
      message: 'Login successful',
      success: true,
      data: { name: admin.name, email: admin.email, role: admin.role },
    })

    res.cookies.set(COOKIE_NAME_EXPORT, token, {
      httpOnly: true,
      secure:   process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge:   60 * 60 * 24 * 7, // 7 days
      path:     '/',
    })

    return res
  } catch (error) {
    console.error('[Admin Login]', error)
    return NextResponse.json({ message: 'Internal server error', success: false }, { status: 500 })
  }
}

export async function DELETE() {
  const res = NextResponse.json({ message: 'Logged out', success: true })
  res.cookies.delete(COOKIE_NAME_EXPORT)
  return res
}
