import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type RankFiltersProps = {
  selected: string;
  setSelected: (value: string) => void;
  items: string[];
  isDesktop?: boolean;
};

export const RankFilters = ({
  selected,
  setSelected,
  items,
  isDesktop,
}: RankFiltersProps) => (
  <Select value={selected} onValueChange={setSelected} defaultValue="Geral">
    <SelectTrigger
      showChevrDownIcon={false}
      className="hover:bg-primary-dark/10 transition-all ease-in shadow-none border-none flex w-10 items-end"
    >
      <ChevronsUpDown className="text-blue-200" />
    </SelectTrigger>

    <SelectContent
      className="font-fredoka p-0"
      align={isDesktop ? 'center' : 'end'}
    >
      {items.map((value) => (
        <SelectItem
          key={value}
          value={value}
          className={cn(
            'py-1 pl-2 border-l-4 border-transparent rounded-l-none [&>span:first-child]:hidden',
            selected === value
              ? 'font-semibold border-l-primary border-l-4'
              : 'hover:border-l-gray-300 hover:border-l-4'
          )}
        >
          {value}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);
