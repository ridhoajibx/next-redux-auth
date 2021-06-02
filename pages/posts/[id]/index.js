import axios from "axios";
import { useRouter } from "next/router";
import { Button } from "../../../components";
import Post from "../components/Post";

export default function Show({ post }) {
    let router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Post {...post} />
            <Button onSubmit={() => router.back()}>Back</Button>
        </div>
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        fallback: true,
    }
}

// This also gets called at build time
export async function getStaticProps({ query, params }) {
    const { id } = query || params;
    const res = await axios.get(`${process.env.API_URL}/posts/${id}`)
    const post = await res.data

    return { props: { post } }
}