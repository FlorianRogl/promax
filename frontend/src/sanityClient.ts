import { createClient, type SanityClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'

export const client: SanityClient = createClient({
    projectId: '8er2mgl5', // ← NEUE Project ID!
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true,
    token: ''
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any): ImageUrlBuilder => builder.image(source)