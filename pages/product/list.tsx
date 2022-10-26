import { NextPage } from "next"
import { ListPage } from "~/components/pages/ListPage"
import { productListMetaGetter } from "~/meta/listMeta/product"

const ProductList:NextPage = () => {
  return (
    <ListPage
      title="Product List"
      metaGetter={productListMetaGetter}
    />
  )
}

export default ProductList