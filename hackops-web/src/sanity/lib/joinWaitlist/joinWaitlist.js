import { client } from "../client"

export async function createWaitlistEntry(email) {
  try {
    const result = await client.create({
      _type: 'waitlist',
      email: email,
    })
    return result
  } catch (error) {
    console.error('Error creating waitlist entry:', error)
    throw error
  }
}
