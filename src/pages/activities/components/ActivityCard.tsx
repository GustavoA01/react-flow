import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const ActivityCard = () => {
  return (
    <Item className="border-green-200 border-2 rounded-lg hover:shadow-md transition-all duration-150 ease-in cursor-pointer">
      <ItemMedia className="bg-green-100 text-green-600 rounded-lg p-2 ">
        <Check />
      </ItemMedia>

      <ItemContent>
        <ItemTitle className="font-semibold sm:text-lg text-zinc-600">
          Regras de derivação
        </ItemTitle>
        <ItemDescription className="font-semibold text-xs text-zinc-400">
          5 PERGUNTAS
        </ItemDescription>
      </ItemContent>

      <ItemActions>
        <Badge className="font-bold px-2 py-1 text-xs sm:text-sm bg-zinc-100 text-zinc-500">
          + 120 pts
        </Badge>
      </ItemActions>
    </Item>
  );
};
