/**
 * Run once to seed the initial super-admin account.
 * Usage: npx ts-node -P tsconfig.seed.json src/scripts/seed.ts
 */
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

async function seed() {
  const MONGODB_URI = process.env.MONGODB_URI
  if (!MONGODB_URI) throw new Error('MONGODB_URI not set')

  await mongoose.connect(MONGODB_URI)
  console.log('Connected to MongoDB')

  /* Dynamic import to avoid circular deps in seed context */
  const { Admin } = await import('../lib/models/Admin')

  const existing = await Admin.findOne({ email: 'admin@littlegarimayans.in' })
  if (existing) {
    console.log('Admin already exists. Skipping seed.')
    await mongoose.disconnect()
    return
  }

  await Admin.create({
    name:     'Super Admin',
    email:    'admin@littlegarimayans.in',
    password: 'Admin@TLG2024!', // CHANGE THIS IMMEDIATELY after first login
    role:     'super-admin',
    active:   true,
  })

  console.log('✅ Super admin created: admin@littlegarimayans.in / Admin@TLG2024!')
  console.log('⚠️  CHANGE THE PASSWORD IMMEDIATELY after first login!')
  await mongoose.disconnect()
}

seed().catch(console.error)
