import {
  StyleFormContainer,
  StyleHomeContainer,
  StyleListContainer,
  StyleSearchContainer,
  StyleHomeContent,
  StyleFooterContainer,
  StyleHeaderFormContainer,
} from '@/styles/Home'

import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { SearchContainer } from '@/components/SearchContainer'
import { List } from '@/components/List'
import { Pagination } from '@/components/Pagination'
import { FormComponent } from '@/components/FormComponent'
import React, { useContext } from 'react'
import { FormHeaderList } from '@/components/FormHeaderList'
import TransactionContext from '@/context/TransactionContext'
import { FormikValues } from 'formik/dist/types'
import { ElementProps } from '@/types/contex'

import useSWR from 'swr'
import { fetcher } from '@/services'
import { NotFoundItem } from '@/components/NotFoundItem'

// const items = [
//   {
//     id: 15,
//     title: 'Transação 15',
//     description: 'Registro da transação 15',
//     date: '2021-07-26T00:05:36.879Z',
//     amount: 2000.0,
//     status: 'warning',
//   },
//   {
//     id: 16,
//     title: 'Transação 16',
//     description: 'Registro da transação 16',
//     date: '2021-07-26T00:05:36.879Z',
//     amount: 2000.0,
//     status: 'done',
//   },
//   {
//     id: 17,
//     title: 'Transação 17',
//     description: 'Registro da transação 17',
//     date: '2021-07-26T00:05:36.879Z',
//     amount: 2000.0,
//     status: 'done',
//   },
// ]

const options = [
  { value: 'Done', id: 1 },
  { value: 'Warning', id: 2 },
  { value: 'Error', id: 3 },
]

const optionsHeaderList = [
  { value: 'Title', id: 1 },
  { value: 'Description', id: 2 },
  { value: 'Status', id: 3 },
]

export default function Home() {
  const { setState } = useContext(TransactionContext)
  const { data, error } = useSWR('{ users { name } }', fetcher)

  if (error || !data) return <NotFoundItem />

  const transactions = data.data
  const onSubmitSearchContainer = (data: FormikValues) => {
    setState((prev: ElementProps) => ({
      ...prev,
      formHeader: { input: data.search, status: data.status },
    }))
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setOrderBy = (data: any) => {
    setState((prev: ElementProps) => ({
      ...prev,
      formLists: { orderby: data.target.value },
    }))
  }

  const onClickButtonFooter = () => {
    console.log('onClickButtonFooter')
  }

  const renderHeader = () => {
    return (
      <StyleSearchContainer>
        <Card
          header={
            <SearchContainer
              options={options}
              onSubmit={onSubmitSearchContainer}
            />
          }
        />
      </StyleSearchContainer>
    )
  }

  const renderList = () => {
    return (
      <StyleListContainer>
        <Card
          primary
          header={
            <FormHeaderList onSubmit={setOrderBy} options={optionsHeaderList} />
          }
          content={<List withBorder withTag items={transactions} />}
          footer={<Pagination total={transactions.length} next={2} prev={4} />}
        />
      </StyleListContainer>
    )
  }

  const renderForm = () => {
    return (
      <StyleFormContainer>
        <Card
          header={
            <StyleHeaderFormContainer>Título genérico</StyleHeaderFormContainer>
          }
          content={<FormComponent />}
          height={'50vh'}
        />
      </StyleFormContainer>
    )
  }

  const renderFooter = () => {
    return (
      <StyleFooterContainer>
        <Button size="md" onClick={onClickButtonFooter}>
          Acão Principal
        </Button>
      </StyleFooterContainer>
    )
  }

  return (
    <StyleHomeContainer>
      {renderHeader()}
      <StyleHomeContent>
        {renderList()}
        {renderForm()}
      </StyleHomeContent>
      {renderFooter()}
    </StyleHomeContainer>
  )
}

// export async function getStaticProps() {
//   const transactions = await getTransaction()

//   console.log(transactions.data.data)

//   return {
//     props: {
//       transactions: transactions.data.data,
//     },
//   }
// }
