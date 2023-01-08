import Link from "next/link";
import Head from "next/head";

export default function Home() {
    return <>
        <Head>
            {/*修改网页标题*/}
            <title>index page</title>
        </Head>
        <div>
            <div>index page</div>
            <Link href='/list' className={'link'}>to list page</Link>
            <img src="/images/1.jpg" className={'demo'}/>
        </div>
        <style jsx>{`
            .demo{
                width: 300px;
            } 
        `}</style>
    </>
}