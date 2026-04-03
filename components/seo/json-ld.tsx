type JsonLdData = Record<string, unknown>;

export function JsonLd({
  data,
}: {
  data: JsonLdData | JsonLdData[];
}) {
  const entries = Array.isArray(data) ? data : [data];

  return (
    <>
      {entries.map((entry, index) => (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
          key={index}
          type="application/ld+json"
        />
      ))}
    </>
  );
}
