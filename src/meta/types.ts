import { IDataActionProps } from "~/components/action/DataAction"
import { ITableProps } from "~/components/table/Table"
import { RootState } from "~/store/store"

interface IListMeta {
  columns: ITableProps["columns"]
  storeSlice?: keyof RootState
  tableActions?: IDataActionProps[]
  rowActions?: IDataActionProps[]
}

export interface IListMetaGetter {
  (data?: Record<string, any>): IListMeta
}