import { createClient, type SanityClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { ImageUrlBuilder } from '@sanity/image-url'

export const client: SanityClient = createClient({
    projectId: '8er2mgl5', // ← NEUE Project ID!
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true,
    token: ''
})

const builder = imageUrlBuilder(client)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any): ImageUrlBuilder => builder.image(source)
