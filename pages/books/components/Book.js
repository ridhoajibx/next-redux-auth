import Link from 'next/link';
import style from '@emotion/styled';

export default function Book({ id, title, description, excerpt }) {
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
            <BookHeading>
                <Link href="/books/[id]" as={`/books/${id}`}>
                    <BookLink>{title}</BookLink>
                </Link>
            </BookHeading>
            <p>{description}</p>
            <p>{excerpt}</p>
        </div>
    )
}
