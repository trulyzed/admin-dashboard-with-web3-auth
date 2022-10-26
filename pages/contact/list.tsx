import { NextPage } from "next"
import { ListPage } from "~/components/pages/ListPage"
import { contactListMetaGetter } from "~/meta/listMeta/contact"

const ContactList:NextPage = () => {
  return (
    <ListPage
      title="Contact List"
      metaGetter={contactListMetaGetter}
    />
  )
}

export default ContactList