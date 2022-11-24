import Head from "next/head";
import Header from "./header";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{"RC WEB - Randy Caballero"}</title>
      </Head>
      <div className="h-screen flex">
        <Header></Header>

        {children}
      </div>
    </>
  );
}

export default Layout;
