'use client';
import { Container } from '@/components/Container';
import { useCategorys } from './container';
import { Table } from '@/components/Table';
import { Button } from '@/components/Button';

export const CategorysTemplate = () => {
  const { cols, categorys } = useCategorys();

  return (
    <div className="flex flex-col">
      <Table cols={cols}>
        {categorys?.map((category) => (
          <tr
            key={category.id}
            className="border-b bg-gray-800 border-gray-700"
          >
            <td className="py-4 px-20">{category.id}</td>
            <td className="py-4 px-20">{category.title}</td>
          </tr>
        ))}
      </Table>
    </div>
  );
};
