export type RankFiltersProps = {
  selected: string;
  setSelected: (value: string) => void;
};

export type RanksListProps = {
  ranks: { position: number; name: string; points: number }[];
};

export type RankTableHeaderProps = {
  selected: string;
  setSelected: (value: string) => void;
  isDesktop?: boolean;
};
