import { useToggle } from '@/hooks/useToggle';

/* 
Mit Hilfe des useToggle-Hooks, den wir in der
Custom Hooks-Übung geschrieben haben, soll der Content-Bereich
ein- und ausgeblendet werden, der Text im Button soll entsprechend
wechseln. Anfangs soll der Content eingeklappt sein.
Das Bild nur anzeigen, wenn eine Bildquelle vorhanden
ist. Das alt-Attribut kann leer bleiben, weil es im Datensatz leider
nicht enthalten ist.
 */

export default function NewsItem({
  title,
  urlToImage,
  description,
  url,
  index,
}) {
  const [isVisible, toggleVisible] = useToggle(false);

  return (
    <article
      className="news-item slide-in-right"
      style={{
        '--delay': `${index * 0.2}s`,
      }}
    >
      <h3 className="news-item__title">
        <a href={url} rel="noreferrer" target="_blank">
          {title}
        </a>
      </h3>
      <button onClick={toggleVisible}>
        {isVisible ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </button>
      {isVisible && (
        <div className="news-item__content">
          {urlToImage && (
            <img
              className="news-item__image"
              width={400}
              height={200}
              src={urlToImage}
              alt="Preview"
            />
          )}
          <p className="news-item__description">{description}</p>
        </div>
      )}
    </article>
  );
}
