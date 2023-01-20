import Meta from 'component/meta/meta'
import Container from 'component/Container/Container';
import Hero from "component/Hero/Hero";

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </Container>
  );
}
