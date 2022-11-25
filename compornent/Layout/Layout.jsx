import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({ Children }) {
  return (
    <>
      <Header />
      <main>{Children}</main>
      <Footer />
    </>
  );
}
