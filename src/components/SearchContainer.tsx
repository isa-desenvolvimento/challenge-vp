import {
  StyleSearchContainer,
  StyleButtonContainer,
} from '@/styles/SearchContainer'
import { Button } from '@/components/Button'
import { Combobox } from '@/components/Combobox'
import { InputComponent } from '@/components/InputComponent'
import { BaseForm } from './BaseForm'
import { SearchContainerProps } from '@/types/global'

export const SearchContainer = ({
  options,
  onSubmit,
}: SearchContainerProps) => {
  const renderBaseForm = () => (
    <StyleSearchContainer>
      <InputComponent
        name="search"
        iconProps="search"
        placeholder="Pesquisa Livre"
      ></InputComponent>
      <Combobox options={options} placeholder="Status" name="status" isFormik />
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
