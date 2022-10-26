import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { Table } from '~/components/table/Table'
import { IListMetaGetter } from '~/meta/types'
import { RootState } from '~/store/store'
import { DataAction } from '../action/DataAction'

interface IListPage {
  title: string
  metaGetter: IListMetaGetter
}

export const ListPage = ({
  title,
  metaGetter,
}: IListPage) => {
  const { columns, storeSlice, tableActions=[], rowActions=[] } = metaGetter()
  const dataSource = useSelector((state: RootState) => storeSlice ? state[storeSlice].list : [])
  const documentTitle = `${title} | Dashboard`

  return (
    <>
      <Head>
        <title>{documentTitle}</title>
      </Head>
      <Box
        sx={{
          mt: 4
        }}
      >
        <Box
          sx={{
            py: 2,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography
            variant='h5'
            display={'inline-block'}
          >
            {title}
          </Typography>
          {tableActions.map((i, index) => (
            <DataAction key={index} {...i} />
          ))}
        </Box>

        <Box sx={{mt: 2}}>
          <Table
            columns={columns}
            dataSource={dataSource}
            rowActions={rowActions}
          />
        </Box>
      </Box>
    </>
  )
}