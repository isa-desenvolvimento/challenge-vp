import {
  StyleFormContainer,
  StyleHomeContainer,
  StyleListContainer,
  StyleSearchContainer,
  StyleHomeContent,
  StyleFooterContainer,
  StyleHeadList,
} from '@/styles/Home'

import { Card } from '@/components/Card'
import React from 'react'
import { Button } from '@/components/Button'
import { SearchContainer } from '@/components/SearchContainer'
import { Combobox } from '@/components/Combobox'

const options = [
  { value: 'John', id: 1 },
  { value: 'Doe', id: 2 },
]

export default function Home() {
  const renderHeader = () => {
    return (
      <StyleSearchContainer>
        <Card header={<SearchContainer />} display="block" />
      </StyleSearchContainer>
    )
  }

  const renderList = () => {
    return (
      <StyleListContainer>
        <Card
          primary
          header={
            <StyleHeadList>
              <Combobox options={options} placeholder="Status" primary />
            </StyleHeadList>
          }
          content={'list'}
          footer={'list'}
        />
      </StyleListContainer>
    )
  }

  const renderForm = () => {
    return (
      <StyleFormContainer>
        <Card header={'form'} content={'form'} height={'54vh'} />
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
