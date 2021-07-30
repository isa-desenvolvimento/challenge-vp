import {
  StyleSearchContainer,
  StyleButtonContainer,
} from '@/styles/SearchContainer'
import { Button } from '@/components/Button'
import { Combobox } from '@/components/Combobox'
import { InputComponent } from '@/components/InputComponent'
import { BaseForm } from './BaseForm'
import { FormikValues } from 'formik'

const options = [
  { value: 'John', id: 1 },
  { value: 'Doe', id: 2 },
]

export const SearchContainer = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: FormikValues, action: any) => {
    console.log(data, action)
  }

  const renderBaseForm = () => (
    <StyleSearchContainer>
      <InputComponent
        name="search"
        iconProps="search"
        placeholder="Pesquisa Livre"
      ></InputComponent>
      <Combobox options={options} placeholder="Status" name="status" />
      <StyleButtonContainer>
        <Button type="submit" primary>
          Buscar
        </Button>
      </StyleButtonContainer>
    </StyleSearchContainer>
  )

  return (
    <BaseForm
      baseForm={renderBaseForm()}
      onSubmit={onSubmit}
      initialValues={{
        search: '',
        status: '',
      }}
    />
  )
}
