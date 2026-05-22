import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { Admission } from '@/lib/models/Admission'
import { Franchise } from '@/lib/models/Franchise'
import { Contact } from '@/lib/models/Contact'
import { verifyRequestToken } from '@/lib/auth'

export async function GET(req: NextRequest) {
  const session = verifyRequestToken(req)
  if (!session) return NextResponse.json({ message: 'Unauthorized', success: false }, { status: 401 })

  await connectDB()

  const [
    totalAdmissions, newAdmissions,
    totalFranchise,  newFranchise,
    totalContacts,   newContacts,
  ] = await Promise.all([
    Admission.countDocuments(),
    Admission.countDocuments({ status: 'new' }),
    Franchise.countDocuments(),
    Franchise.countDocuments({ status: 'new' }),
    Contact.countDocuments(),
    Contact.countDocuments({ status: 'new' }),
  ])

  /* Recent 5 leads */
  const [recentAdmissions, recentFranchise] = await Promise.all([
    Admission.find().sort({ createdAt: -1 }).limit(5).lean(),
    Franchise.find().sort({ createdAt: -1 }).limit(5).lean(),
  ])

  return NextResponse.json({
    success: true,
    data: {
      admissions: { total: totalAdmissions, new: newAdmissions },
      franchise:  { total: totalFranchise,  new: newFranchise },
      contacts:   { total: totalContacts,    new: newContacts },
      recentAdmissions,
      recentFranchise,
    },
  })
}
