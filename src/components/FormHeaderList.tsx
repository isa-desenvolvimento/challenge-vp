import { Combobox } from '@/components/Combobox'
import { BaseForm } from './BaseForm'
import { StyleHeadList } from '@/styles/FormHeaderList'
import { SearchContainerProps } from '@/types/global'

export const FormHeaderList = ({ options, onSubmit }: SearchContainerProps) => {
  const renderBaseForm = () => (
    <StyleHeadList role="form-header-list">
      <Combobox
        options={options}
        placeholder="Status"
        name="orderby"
        onChange={onSubmit}
        primary
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
