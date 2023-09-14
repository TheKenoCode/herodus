// External and third-party imports
import type { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// Internal imports and utilities
import connectDB from '@/lib/connectDB'
import { UserModel } from '@/lib/models/User'
import { revalidatePath } from 'next/cache'

// Configuration
const JWT_SECRET = process.env.JWT_SECRET || 'my-secret-key' // It's safer to keep the secret in .env

// Define user roles
enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

interface CreateUserBody {
  name: string
  email: string
  password: string
  role: UserRole
  bio: string
  location: string
  userLink: string
  YHaplogroup: string
  MtHaplogroup: string
  image: string
  coverImage: string
  following: string[]
  followers: string[]
}

/**
 * GET handler to fetch all users.
 */
export async function GET(req: NextApiRequest): Promise<NextResponse> {
  await connectDB()

  try {
    const users = await UserModel.find({})

    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message })
  }
}

/**
 * POST handler to create a new user.
 */
export async function POST(request) {
  const {
    name,
    email,
    password,
    role,
    bio,
    location,
    userLink,
    YHaplogroup,
    MtHaplogroup,
    imageUrl,
    coverImage,
    following,
    followers,
  } = await request.json()
  await connectDB()

  // Hash the password before saving
  const saltRounds = 10
  const hashedPassword = password
    ? await bcrypt.hash(password, saltRounds)
    : 'google'

  // Create the user
  const user = await UserModel.create({
    name,
    email,
    password: hashedPassword,
    role,
    bio,
    location,
    userLink,
    YHaplogroup,
    MtHaplogroup,
    imageUrl,
    coverImage,
    following,
    followers,
  })

  // Generate JWT token for user
  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' })

  return NextResponse.json(
    { message: 'User Created', token: token },
    { status: 201 },
  )
}

// Note: I've commented out the role check since you had it commented out. If you intend to use it in the future, you might want to uncomment and adjust it accordingly.