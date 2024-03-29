import Meta from 'component/meta/meta'
import Container from "component/Container/Container";
import Hero from "component/Hero/Hero";

export default function Blog() {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログ一覧" />
      <Hero title="Blog" subtitle="Recent Posts" />
    </Container>
  )
}
