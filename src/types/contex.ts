export type ElementProps = {
  formHeader: {
    input: string
    status: string
  }
  formLists: { orderby: string }
  form: string
}

export type TransactionContextProps = {
  state: ElementProps
  setState: React.Dispatch<React.SetStateAction<ElementProps>>
}
