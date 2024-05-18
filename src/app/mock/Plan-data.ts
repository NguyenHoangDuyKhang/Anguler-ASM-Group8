import { Plan } from './../data/Plan-interface';

export class PlanData {
  Plan: Plan[] = [
    {
      id: 1,
      name: 'đề án 1',
      cate_ID: 1,
      majors_ID: 1,
      status: 0,
      description: 'Đề án 1',
      group: 'Nhóm 1',
      slug: 'du-an-1',
      createdAt: new Date('2024-01-01'),
      fishdedAt: new Date('2024-02-01'),
      pubishedAt: new Date('2024-02-01'),
    },
    {
        id: 2,
        name: 'đề án 2',
        cate_ID: 2,
        majors_ID: 2,
        status: 0,
        description: 'Đề án 2',
        group: 'Nhóm 2',
        slug: 'du-an-2',
        createdAt: new Date('2024-01-01'),
        fishdedAt: new Date('2024-02-01'),
        pubishedAt: new Date('2024-02-01'),
      },
      {
        id: 3,
        name: 'đề án 3',
        cate_ID: 3,
        majors_ID: 3,
        status: 0,
        description: 'Đề án 3',
        group: 'Nhóm 1',
        slug: 'du-an-3',
        createdAt: new Date('2024-01-01'),
        fishdedAt: new Date('2024-02-01'),
        pubishedAt: new Date('2024-02-01'),
      },
  ];
}