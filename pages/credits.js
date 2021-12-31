import { Layout, Breadcrum } from "../components";

function Sample() {
  return (
    <Layout>
      <main className="bg-[#3331C4] pb-12">
        {/* Change this to the current Active Page */}
        <Breadcrum currentPage="Credits" />

        {/* Your Page Code here || Remove the next line */}
        <br className="my-28" />
      </main>
    </Layout>
  );
}

export default Sample;
