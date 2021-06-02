import { useRouter } from "next/router";
import { Button } from "../../components";
import Head from 'next/head';

export default function index() {
    let router = useRouter()
    return (
        <div>
            <Head>
                <title>Contact-us</title>
                <meta name="description" content="Contact us page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h3>This is contact us page</h3>
            <Button onSubmit={() => router.back()}>Back</Button>
        </div>
    )
}
