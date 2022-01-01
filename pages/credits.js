import { Layout, Breadcrum } from "../components";

function Sample() {
  return (
    <Layout>
      <div>
        {/* Change this to the current Active Page */}
        <Breadcrum currentPage="Credits" />

        {/* Your Page Code here || Remove the next line */}
        <br className="my-28" />
      </div>
    </Layout>
  );
}

export default Sample;
