export type RankFiltersProps = {
  selected: string;
  setSelected: (value: string) => void;
};

export type RanksListProps = {
  ranks: { position: number; name: string; points: number }[];
};
