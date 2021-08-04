/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  StyleFormContainer,
  StyleHomeContainer,
  StyleListContainer,
  StyleSearchContainer,
  StyleHomeContent,
  StyleFooterContainer,
  StyleHeaderFormContainer,
} from '@/styles/Home'
import { useRouter } from 'next/router'

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
import { ElementProps, TransactionContextProps } from '@/types/contex'
import {
  getByStatus,
  getByString,
  getData,
  order,
} from '@/services/transactions'

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

export default function Home({ transactions }: TransactionContextProps) {
  const { setState } = useContext(TransactionContext)
  const router = useRouter()

  const onSubmitSearchContainer = (data: FormikValues) => {
    setState((prev: ElementProps) => ({
      ...prev,
      formHeader: { input: data.search, status: data.status },
    }))

    const params = { search: data.search, status: data.status }

    if (!data.search) delete params.search
    if (!data.status) delete params.status

    router.push({
      pathname: '/',
      query: params,
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setOrderBy = (data: any) => {
    setState((prev: ElementProps) => ({
      ...prev,
      formLists: { orderby: data.target.value },
    }))

    router.push({
      pathname: '/',
      query: { orderby: data.target.value },
    })
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

export async function getServerSideProps({ query }: any) {
  const { search, status, orderby } = await query

  let data
  switch (true) {
    case search !== undefined:
      data = await getByString(search.toLowerCase())
      break
    case status !== undefined:
      data = await getByStatus(status.toLowerCase())
      break
    case orderby !== undefined:
      data = await order(orderby.toLowerCase())
      break
    default:
      data = await getData()
      break
  }

  return {
    props: {
      transactions: data,
    },
  }
}
