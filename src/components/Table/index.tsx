import { IColumn, ITableProps } from './types';

export const Table: React.FC<ITableProps> = ({ cols, children }) => {
  return (
    <div className="mt-5 flex items-center justify-center">
      <div className="overflow-x-auto h-[80rem] relative">
        <table className="w-full text-sm text-left  text-gray-400">
          <thead className="text-xs uppercase   bg-gray-700 text-gray-400">
            <tr>
              {cols?.map((col, index) => (
                <th className="py-5 px-5" key={`col-${index}`}>
                  {col.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
};
