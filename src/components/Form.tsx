import { StyleFormContainer } from '@/styles/Form'
import { ItemProps } from '@/types/global'
import { Formik } from 'formik'
import React, { EventHandler } from 'react'
import { InputComponent } from '@/components/InputComponent'

export const Form = () => {
  const onSubmit = (data: ItemProps) => {
    console.log(data)
  }

  const renderForm = () => {
    return (
      <Formik
        onSubmit={(values) => onSubmit(values)}
        initialProps={{
          id: '',
          title: '',
          description: '',
          date: '',
          amount: '',
          status: '',
        }}
      >
        {(handleSubmit) => (
          <form onSubmit={handleSubmit}>
            <InputComponent placeholder="R$ 0.0" primary name="title" />
            <InputComponent placeholder="R$ 0.0" primary name="description" />
            <InputComponent placeholder="R$ 0.0" primary name="date" />
            <InputComponent placeholder="R$ 0.0" primary name="amount" />
            <InputComponent placeholder="R$ 0.0" primary name="status" />
          </form>
        )}
      </Formik>
    )
  }

  return <StyleFormContainer>{renderForm()}</StyleFormContainer>
}
