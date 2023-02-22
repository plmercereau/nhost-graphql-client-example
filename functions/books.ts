import { NhostClient } from '@nhost/nhost-js'
import { Request, Response } from 'express'
import schema from '../src/schema'

const nhost = new NhostClient({
    schema,
    subdomain: 'localhost',
    adminSecret: 'nhost-admin-secret'
})

export default async (req: Request, res: Response) => {
    const users = await nhost.graphql.query.users()
    for (const user of users) {
        console.log(user.id)
    }
    await nhost.graphql.mutation.insertUsers({
        variables: { objects: [{ locale: 'en' }] },
        select: { affected_rows: true }
    })

    const author = await nhost.graphql.mutation.insert_authors_one({
        variables: { object: { name: 'Leo Tolstoy' } }
    })
    const book = await nhost.graphql.mutation.insert_books_one({
        variables: { object: { title: 'War and Peace', author_id: author.id } },
        select: { id: true }
    })

    console.log(book.id)

    const books = await nhost.graphql.query.books({
        select: { author: { select: { name: true } }, title: true }
    })
    for (const book of books) {
        console.log(book.title)
        console.log(book.author.name)
    }

    res.status(200).json({ books })
}
