import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { platform, category, type } = await req.json()
  const apiKey = process.env.OPENAI_API_KEY

  if (!apiKey) {
    return NextResponse.json({ error: 'Brak klucza OpenAI' }, { status: 500 })
  }

  const prompt = `Jesteś kreatywnym asystentem dla młodych twórców. Wymyśl oryginalny, angażujący pomysł na content na platformę: ${platform}, kategoria: ${category}, rodzaj: ${type}. Podaj: tytuł, krótki opis, przykładowe hashtagi.`

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Jesteś kreatywnym asystentem dla młodych twórców.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 200,
      temperature: 0.9,
    }),
  })

  if (!response.ok) {
    return NextResponse.json({ error: 'Błąd OpenAI' }, { status: 500 })
  }

  const data = await response.json()
  const idea = data.choices?.[0]?.message?.content || 'Brak pomysłu.'

  return NextResponse.json({ idea })
} 