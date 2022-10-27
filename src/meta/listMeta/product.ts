import { IListMetaGetter } from '~/meta/types'
import { add, remove, update } from '~/store/product/slice'
import { productFormMetaGetter } from '../formMeta/product'

export const productListMetaGetter: IListMetaGetter = () => {
  return {
    columns: [
      {
        title: 'SKU',
        dataIndex: 'sku'
      },
      {
        title: 'Title',
        dataIndex: 'title'
      },
      {
        title: 'Category',
        dataIndex: 'category'
      },
      {
        title: 'Price',
        dataIndex: 'price'
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity'
      }
    ],
    storeSlice: 'product',
    tableActions: [
      {
        actionType: 'CREATE',
        actionText: 'Create Product',
        formMetaGetter: productFormMetaGetter('CREATE'),
        action: add
      }
    ],
    rowActions: [
      { actionType: 'UPDATE', formMetaGetter: productFormMetaGetter('UPDATE'), action: update },
      { actionType: 'REMOVE', action: remove }
    ]
  }
}
