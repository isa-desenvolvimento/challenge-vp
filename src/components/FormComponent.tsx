import { StyleFormContainer } from '@/styles/Form'
import { FormikValues } from 'formik'
import { InputComponent } from '@/components/InputComponent'
import { BaseForm } from './BaseForm'

export const FormComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: FormikValues, action: any) => {
    console.log(data, action)
  }

  const renderBaseForm = () => (
    <StyleFormContainer role="form-component">
      <InputComponent
        placeholder="R$ 0.0"
        name="title"
        label="Formulário genérico"
      />
      <InputComponent
        placeholder="R$ 0.0"
        name="description"
        label="Formulário genérico"
      />
      <InputComponent
        placeholder="R$ 0.0"
        name="date"
        label="Formulário genérico"
      />
    </StyleFormContainer>
  )

  return (
    <BaseForm
      baseForm={renderBaseForm()}
      onSubmit={onSubmit}
      initialValues={{
        title: '',
        description: '',
        date: '',
        amount: '',
        status: '',
      }}
    />
  )
}
