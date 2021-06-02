import axios from 'axios';
import Link from 'next/link';
import style from '@emotion/styled';
import Head from 'next/head';

export default function index({ books }) {
    const BookHeading = style.h3`
        font-size: 18px;
        text-transform: capitalize;
    `
    const BookLink = style.a({
        color: 'lightgreen',
        cursor: 'pointer',
    })

    return (
        <div>
            <Head>
                <title>Books</title>
                <meta name="description" content="Book page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ul>
                {
                    books.map(book => (
                        <li key={book.id}>
                            <BookHeading>
                                <Link href="/books/[id]" as={`/books/${book.id}`}>
                                    <BookLink>{book.title}</BookLink>
                                </Link>
                            </BookHeading>
                            <p>{book.description}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await axios.get(`${process.env.API_BASE_URL}/Books`)
    const books = await res.data

    if (!books) {
        return {
            notFound: true,
        }
    }

    return {
        props: { books }, // will be passed to the page component as props
    }
}
