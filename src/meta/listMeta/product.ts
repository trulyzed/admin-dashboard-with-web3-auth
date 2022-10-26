import { IListMetaGetter } from '~/meta/types'
import { add, remove, update } from '~/store/product/slice'

export const productListMetaGetter: IListMetaGetter = () => {
  return {
    columns: [
      {
        title: 'SKU',
        dataIndex: 'sku',
      },
      {
        title: 'Title',
        dataIndex: 'title',
      },
      {
        title: 'Price',
        dataIndex: 'price',
      },
      {
        title: 'Category',
        dataIndex: 'category',
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
      }
    ],
    storeSlice: 'product',
    tableActions: [{actionType: 'create', actionText: 'Create Product', action: add}],
    rowActions: [{actionType: 'update', action: update}, {actionType: 'remove', action: remove}]
  }
}