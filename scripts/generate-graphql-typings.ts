import { GraphQLDefinitionsFactory } from '@nestjs/graphql'
import { join } from 'path'

async function start() {
    const definitionsFactory = new GraphQLDefinitionsFactory()
    const typePath = join(process.cwd(), './graphql/index.ts')
    await definitionsFactory.generate({
        typePaths: [
            join(process.cwd(), './graphql/schema.graphql'),
        ],
        path: typePath,
    })
}

start().catch(console.error)
