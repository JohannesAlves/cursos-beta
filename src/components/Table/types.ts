export interface IColumn {
  name: string;
  key?: string;
  icon?: React.ReactNode;
}

export interface ITableProps {
  cols: IColumn[];
  children: React.ReactNode;
}
