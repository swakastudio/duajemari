type Props = {
  data: any;
};

export default function FirohArofiTemplate({ data }: Props) {
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
