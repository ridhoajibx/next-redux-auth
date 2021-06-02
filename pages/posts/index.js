import axios from 'axios';
import Post from './components/Post';

export default function index({ posts }) {
    return (
        <ul>
            {
                posts.map(post => (
                    <li key={post.id}>
                        <Post {...post} />
                    </li>
                ))
            }
        </ul>
    )
}

export async function getServerSideProps() {
    const res = await axios.get(`${process.env.API_BASE_URL}/posts`)
    const posts = await res.data

    if (!posts) {
        return {
            notFound: true,
        }
    }

    return {
        props: { posts }, // will be passed to the page component as props
    }
}
