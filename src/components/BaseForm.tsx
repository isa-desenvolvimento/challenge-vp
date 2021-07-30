import { Formik, Form } from 'formik'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BaseForm = ({ initialValues, baseForm, onSubmit }: any) => {
  const renderForm = () => {
    return (
      <Formik
        onSubmit={(data, action) => onSubmit(data, action)}
        initialValues={initialValues}
      >
        {() => <Form>{baseForm}</Form>}
      </Formik>
    )
  }

  return <>{renderForm()}</>
}
