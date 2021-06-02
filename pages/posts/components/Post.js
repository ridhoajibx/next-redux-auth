import Link from 'next/link';
import style from '@emotion/styled';

export default function Post({ id, title, body }) {
    const PostHeading = style.h3`
        font-size: 18px;
        text-transform: capitalize;
    `
    const PostLink = style.a({
        color: 'lightgreen',
        cursor: 'pointer',
    })
    return (
        <div>
            <PostHeading>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                    <PostLink>{title}</PostLink>
                </Link>
            </PostHeading>
            <p>{body}</p>
        </div>
    )
}
