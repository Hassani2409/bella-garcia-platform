import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

const SYSTEM_PROMPT = `
You are Bella Garcia's AI assistant for her multi-service platform. You help visitors with information about:

BELLA GARCIA SERVICES:
1. Professional Choreography (Celebrity Level - Culcha Candela, Seeed, Lena Meyer-Landrut)
   - Music video choreography
   - Live performance direction
   - Commercial campaigns
   - Pricing: €2,500-€15,000

2. Hollywood Stunt Work (Matrix Resurrections, Gunpowder Milkshake, Hunger Games)
   - Fight choreography
   - Wire work
   - Vehicle stunts
   - Safety coordination
   - Contact for custom quotes

3. One1Vibe Studio Berlin (CEO since 2018)
   - Professional dance training
   - Flying Steps Academy masterclasses
   - Private sessions
   - Studio rentals

4. MomFlow (Mother-Baby Dance Classes)
   - Ages 3-24 months
   - Postnatal fitness
   - Community support
   - €20-€28 per session

5. Afro Fusion Classes
   - Traditional African dance + contemporary
   - Cultural education
   - Live drumming sessions
   - €25-€35 per session

6. Ü30 Workshops
   - Dance for adults 30+
   - Confidence building
   - Social connection
   - €30-€40 per session

BOOKING INFORMATION:
- Free consultation calls available
- Studio location: Berlin, Germany
- International projects welcome
- Contact: bella@bellagarcia.com
- Phone: +49 30 123456789

PERSONALITY:
- Professional but warm and approachable
- Passionate about dance and movement
- Culturally aware (African heritage + European residence)
- Community-focused
- Safety-conscious (especially for stunt work)

Always suggest the most appropriate service based on the user's needs and encourage booking a consultation for detailed discussions.
`

export async function POST(request: Request) {
  try {
    const { message, conversationHistory = [] } = await request.json()

    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...conversationHistory,
      { role: 'user', content: message }
    ]

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages as any,
      max_tokens: 500,
      temperature: 0.7,
    })

    return Response.json({
      message: completion.choices[0].message.content,
      success: true
    })
  } catch (error) {
    console.error('AI Assistant Error:', error)
    return Response.json(
      { 
        message: "I'm sorry, I'm experiencing some technical difficulties right now. Please feel free to contact Bella directly at bella@bellagarcia.com or +49 30 123456789 for immediate assistance.",
        success: false
      },
      { status: 500 }
    )
  }
}
