import Head from "next/head";
import Header from "./header";
import MainContent from "./main-content";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{"RC WEB - Randy Caballero"}</title>
      </Head>
      <div className="h-screen flex">
        <Header></Header>
        <MainContent></MainContent>
      </div>
    </>
  );
}

export default Layout;
