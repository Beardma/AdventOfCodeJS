import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        projects: [
            {
                test: {
                    name: 'AoC 2025',
                    root: './2025/tests',
                    environment: 'node',
                },
            },
        ],
    },
})