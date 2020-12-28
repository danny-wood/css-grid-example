import "./latest-news.css";

function LatestNews() {
  return (
    <div className="contained latest-news">
      {data.map((article) => (
        <div key={article.id} className="latest-news-item">
          {article.title}
        </div>
      ))}
    </div>
  );
}

export default LatestNews;

const data = [
  { id: 1, title: "Article 1" },
  { id: 2, title: "Article 2" },
  { id: 3, title: "Article 3" },
];
