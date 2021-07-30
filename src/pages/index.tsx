import {
  StyleFormContainer,
  StyleHomeContainer,
  StyleListContainer,
  StyleSearchContainer,
  StyleHomeContent,
  StyleFooterContainer,
} from '@/styles/Home'

import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { SearchContainer } from '@/components/SearchContainer'
import { List } from '@/components/List'
import { Pagination } from '@/components/Pagination'
import { FormComponent } from '@/components/FormComponent'
import React from 'react'
import { FormHeaderList } from '@/components/FormHeaderList'

const items = [
  {
    id: 15,
    title: 'Transação 15',
    description: 'Registro da transação 15',
    date: '2021-07-26T00:05:36.879Z',
    amount: 2000.0,
    status: 'warning',
  },
  {
    id: 16,
    title: 'Transação 16',
    description: 'Registro da transação 16',
    date: '2021-07-26T00:05:36.879Z',
    amount: 2000.0,
    status: 'done',
  },
  {
    id: 17,
    title: 'Transação 17',
    description: 'Registro da transação 17',
    date: '2021-07-26T00:05:36.879Z',
    amount: 2000.0,
    status: 'done',
  },
]

export default function Home() {
  const renderHeader = () => {
    return (
      <StyleSearchContainer>
        <Card header={<SearchContainer />} />
      </StyleSearchContainer>
    )
  }

  const renderList = () => {
    return (
      <StyleListContainer>
        <Card
          primary
          header={<FormHeaderList />}
          content={<List withBorder withTag items={items} />}
          footer={<Pagination total={items.length} next={2} prev={4} />}
        />
      </StyleListContainer>
    )
  }

  const renderForm = () => {
    return (
      <StyleFormContainer>
        <Card
          header={'Título Generico'}
          content={<FormComponent />}
          height={'57vh'}
        />
      </StyleFormContainer>
    )
  }

  const renderFooter = () => {
    return (
      <StyleFooterContainer>
        <Button size="md">Acão Principal</Button>
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
