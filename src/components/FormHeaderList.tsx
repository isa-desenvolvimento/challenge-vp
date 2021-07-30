import { Combobox } from '@/components/Combobox'
import { BaseForm } from './BaseForm'
import { StyleHeadList } from '@/styles/FormHeaderList'
import { FormikValues } from 'formik'

const options = [
  { value: 'John', id: 1 },
  { value: 'Doe', id: 2 },
]

export const FormHeaderList = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: FormikValues, action: any) => {
    console.log(data, action)
  }
  const renderBaseForm = () => (
    <StyleHeadList>
      <Combobox options={options} placeholder="Status" name="orderby" />
    </StyleHeadList>
  )

  return (
    <BaseForm
      baseForm={renderBaseForm()}
      onSubmit={onSubmit}
      initialValues={{
        orderby: '',
      }}
    />
  )
}
