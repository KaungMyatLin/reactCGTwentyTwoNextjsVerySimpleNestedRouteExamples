import { Fragment } from "react/cjs/react.production.min"
import Link from 'next/link'
const HomePage = () => {
    return (
        <Fragment>
            <div>The home page</div>
            <ul>
                <li><Link href="/news/nextjs-unexisting-page-in-proj">Nextjs is great framework</Link></li>
                <li>Something els</li>
            </ul>
        </Fragment>
    )
}

export default HomePage