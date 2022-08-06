import { useRouter } from 'next/router'

const detailPage = () => {
    const router = useRouter();
    const uriPath = router.query.newsId
    return (
        <div>The detail page</div>
    )
}

export default detailPage