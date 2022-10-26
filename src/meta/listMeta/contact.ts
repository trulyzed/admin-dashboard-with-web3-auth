import { IListMetaGetter } from "~/meta/types"

export const contactListMetaGetter: IListMetaGetter = () => {
  return {
    columns: [
      {
        title: "Name",
        dataIndex: "name",
      },
      {
        title: "Email",
        dataIndex: "email",
      },
      {
        title: "Mobile",
        dataIndex: "mobile",
      },
      {
        title: "Country",
        dataIndex: "country",
      },
    ],
    storeSlice: 'contact'
  }
}