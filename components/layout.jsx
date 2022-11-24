import Head from "next/head";
import Header from "./header";
import Main from "./main";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{"RC WEB - Randy Caballero"}</title>
      </Head>
      <div className="h-screen flex">
        <Header />
        <Main />
        {children}
      </div>
    </>
  );
}

export default Layout;
