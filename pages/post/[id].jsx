import {useRouter} from "next/router";

export default function Post({data}) {
    const router = useRouter();
    // 判断fallback是否为true,为true就生成
    // 当渲染完成,会继续向下运行
    if (router.isFallback)
        // 返回等待渲染时的页面
        return <div>loading</div>
    return <div>
        <span>{data.id}</span>
        <span>{data.title}</span>
    </div>
}

// 返回用户可以访问的所有路由参数
export async function getStaticPaths() { 
    return {
        // 可以访问id=1和2的数据
        paths: [{params: {id: "1"}}, {params: {id: "2"}}], 
        fallback: true
    }
}

// 返回路由参数对应的具体数据
export async function getStaticProps({params}) { 
        switch (id) {
            case "1":
                data = {id: "1", title: 'hello'}
                break
            case "2":
                data = {id: "2", title: 'world'}
                break;
            default:
                data = {}
        }*/ 
    return {
        props: {data: res}
    }
}
