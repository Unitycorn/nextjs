import NewsItem from './NewsItem';

export default function NewsList({ title, news }) {
  return (
    <section className="news-list">
      {title ? <h2>{title}</h2> : ''}
      {/* Für jeden Eintrag in news ein NewsItem */}
      {news.map((newsItem, index) => (
        <NewsItem key={newsItem.url} index={index} {...newsItem} />
      ))}
    </section>
  );
}
