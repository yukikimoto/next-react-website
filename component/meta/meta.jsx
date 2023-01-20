import Head from 'next/head'

import { siteMeta } from 'lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

export default function Meta({ pageTitle }) {

    const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle

    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />
        </Head>
    )
}