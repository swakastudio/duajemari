export default function FirohArofiTemplate({ data }: any) {
  return (
    <main>
      <h1>
        {data.couple.groom.name} & {data.couple.bride.name}
      </h1>

      <p>{data.event.date}</p>
      <p>{data.event.location}</p>
    </main>
  );
}
