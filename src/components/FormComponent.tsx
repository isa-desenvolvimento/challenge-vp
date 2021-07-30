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
    <StyleFormContainer>
      <InputComponent placeholder="R$ 0.0" name="title" />
      <InputComponent placeholder="R$ 0.0" name="description" />
      <InputComponent placeholder="R$ 0.0" name="date" />
      <InputComponent placeholder="R$ 0.0" name="amount" />
      <InputComponent placeholder="R$ 0.0" name="status" />
      <button type="submit">submit</button>
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
