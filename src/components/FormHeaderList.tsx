import { Combobox } from '@/components/Combobox'
import { BaseForm } from './BaseForm'
import { StyleHeadList } from '@/styles/FormHeaderList'
import { FormikValues } from 'formik'
import TransactionContext from '@/context/TransactionContext'
import { useContext } from 'react'
import { ElementProps } from '@/types/contex'

const options = [
  { value: 'Title', id: 1 },
  { value: 'Description', id: 2 },
  { value: 'Status', id: 3 },
]

export const FormHeaderList = () => {
  // const { setState } = useContext(TransactionContext)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setOrderBy = (data: FormikValues) => {
    console.log(data)

    // setState((prev: ElementProps) => ({
    //   ...prev,
    //   formLists: { orderby: data },
    // }))
  }

  const renderBaseForm = () => (
    <StyleHeadList>
      <Combobox
        options={options}
        placeholder="Status"
        name="orderby"
        onChange={(e: React.FormEvent<HTMLInputElement>) => setOrderBy(e)}
      />
    </StyleHeadList>
  )

  return (
    <BaseForm
      baseForm={renderBaseForm()}
      initialValues={{
        orderby: '',
      }}
    />
  )
}
