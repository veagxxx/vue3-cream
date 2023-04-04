import { ElTag, ElButton, ElAvatar } from "element-plus";
import { Edit } from "@element-plus/icons-vue";
import { TbColumn } from '@/typings/table';
import { h } from "vue";
export const columns: TbColumn<any>[] = [
  {
    type: 'index',
    label: '序号',
    width: 60
  },
  {
    prop: 'date',
    align: 'center',
    label: '日期',
  },
  {
    prop: 'name',
    align: 'center',
    label: '名字',
  },
  // {
  //   prop: 'avatar',
  //   align: 'center',
  //   label: '头像',
  //   render: (row?: any) => {
  //     return h(ElAvatar, { src: row.avatar })
  //   }
  // },
  {
    prop: 'age',
    align: 'center',
    label: '年龄',
  },
  {
    prop: 'gender',
    align: 'center',
    label: '性别',
    render: (row?: any) => {
      const value: number = row.gender;
      return h(ElTag, { type: value == 1 ? 'danger' : 'success' }, () => value ? '女' : '男')
    }
  },
  {
    prop: 'title',
    align: 'center',
    label: '称号',
  },
  {
    prop: 'email',
    align: 'center',
    label: '邮箱',
  },
  {
    align: 'center',
    label: '操作',
    fixed: 'right',
    width: 150,
    render: (value: any) => (h(
      'span', [
        h(
          ElButton, 
          { 
            icon: Edit,
            type: 'primary', 
            size: 'small', 
            onClick: () => editRow(value) 
          }, 
          () => '编辑',
        ),
        h(
          ElButton, 
          { 
            type: 'danger', 
            size: 'small', 
            onClick: () => deleteRow(value) 
          }, 
          () => '删除'
        ),
      ]
    )),
  },
]
const editRow = (row: TbColumn<any>) => {
  console.log('editRow', row)
}
const deleteRow = (row: TbColumn<any>) => {
  console.log('deleteRow', row)
}

export const tableData = new Array(20).fill({
  date: '2023-03-10', name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野'
})