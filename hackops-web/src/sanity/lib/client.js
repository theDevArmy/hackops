import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Must be false when using authentication tokens
})
