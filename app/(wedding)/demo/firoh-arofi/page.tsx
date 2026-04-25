import { getTemplate } from "@/app/(wedding)/_templates/engine";

export default function Page() {
  const { Template, data } = getTemplate("firoh-arofi");

  return <Template data={data} />;
}
