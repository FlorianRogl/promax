import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import job from './schemaTypes/job'

export default defineConfig({
    name: 'default',
    title: 'ProMax Jobs',

    projectId: '8er2mgl5',
    dataset: 'production',

    plugins: [structureTool(), visionTool()],

    schema: {
        types: [job],
    },
})