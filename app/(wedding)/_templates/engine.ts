import { TEMPLATE_REGISTRY } from "./registry";
import { firohArofiData } from "@/data/wedding/firoh-arofi";

export function getTemplate(slug: string) {
  const Template = TEMPLATE_REGISTRY[slug as keyof typeof TEMPLATE_REGISTRY];

  const dataMap: Record<string, any> = {
    "firoh-arofi": firohArofiData,
  };

  const data = dataMap[slug];

  return {
    Template,
    data,
  };
}
