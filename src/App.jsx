import Layout from "./components/layout/Layout";
import LatestNews from "./components/latest-news/LatestNews";

function App() {
  return (
    <Layout>
      <div className="contained">
        <h1>Contained</h1>
      </div>
      <LatestNews />
      <div className="fluid">
        <div className="block">
          <h2>Fluid</h2>
        </div>
      </div>
    </Layout>
  );
}

export default App;
