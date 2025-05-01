import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const { email, password, name } = await req.json()
  if (!email || !password || !name) {
    return NextResponse.json({ error: 'Wypełnij wszystkie pola!' }, { status: 400 })
  }
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    return NextResponse.json({ error: 'Użytkownik o tym emailu już istnieje.' }, { status: 400 })
  }
  const hashed = await bcrypt.hash(password, 10)
  try {
    await prisma.user.create({
      data: {
        email,
        name,
        password: hashed,
        credits: 2,
      },
    })
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ error: 'Błąd serwera.' }, { status: 500 })
  }
} 