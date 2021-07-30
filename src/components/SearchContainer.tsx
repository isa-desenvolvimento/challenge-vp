import {
  StyleSearchContainer,
  StyleButtonContainer,
} from '@/styles/SearchContainer'
import { Button } from '@/components/Button'
import { Combobox } from '@/components/Combobox'
import { InputComponent } from '@/components/InputComponent'

const options = [
  { value: 'John', id: 1 },
  { value: 'Doe', id: 2 },
]

export const SearchContainer = () => {
  const onChange = () => {}

  return (
    <StyleSearchContainer>
      <InputComponent
        iconProps="search"
        placeholder="Pesquisa Livre"
        onChange={onChange}
      ></InputComponent>
      <Combobox options={options} placeholder="Status" />
      <StyleButtonContainer>
        <Button primary>Buscar</Button>
      </StyleButtonContainer>
    </StyleSearchContainer>
  )
}
