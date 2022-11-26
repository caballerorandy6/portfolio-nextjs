import Head from "next/head";
import Header from "./header";
import MainContent from "./main-content";

function Layout({ children, title, description }) {
  return (
    <div>
      <Head>
        <title>{`RC WEB - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="h-screen flex">
        <Header></Header>
        <MainContent></MainContent>
        {children}
      </div>
    </div>
  );
}

export default Layout;
