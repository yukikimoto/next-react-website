import { getPostBySlug } from 'lib/api'
import { extractText } from 'lib/extract-text'
import Meta from 'component/meta/meta'
import Container from 'component/Container/Container'
import PostHeader from 'component/PostHeader/post-header'
import PostBody from 'component/Post-body/Post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'component/Two-column/Two-column'
import ConvertBody from 'component/convert-body/convert-body'
import PostCategories from 'component/post-categories/post-categories'
import Image from 'next/image'

export default function Schedule({
    title,
    publish,
    content,
    eyecatch,
    categories,
}) {
    return (
        <Container>
            <Meta 
                pageTitle={title}
                pageDesc={description}
                pageImg={eyecacth.url}
                pageImgW={eyecacth.width}
                pageImgH={eyecacth.height}
            />
            <article>
                <PostHeader title={title} subtitle="Blug Article" publish={publish} />

                <figure>
                    <Image 
                        src={eyecatch.url}
                        alt=""
                        layout="responsive"
                        width={eyecatch.width}
                        height={eyecatch.height}
                        sizes="(min-width: 1152px) 1152px, 100vw"
                        priority
                    />
                </figure>

                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody>
                            <ConvertBody contentHTML={content} />
                        </PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar>
                        <PostCategories categories={categories} />
                    </TwoColumnSidebar>
                </TwoColumn>
            </article>
        </Container>
    )
}

export async function getStaticProps() {
    const slug = 'schedule'

    const post = await getPostBySlug(slug)

    const description = extractText(post.content)

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,
            description: description,
        }
    }
}