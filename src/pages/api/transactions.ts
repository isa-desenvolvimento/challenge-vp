import type { NextApiRequest, NextApiResponse } from 'next'
import data from './data.json'

export type ItemProps = {
  id: number
  title: string
  description: string
  date: string
  amount: number
  status: string
}

type ResponseProps = {
  data: ItemProps[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseProps>
) {
  //const { title, description, status } = req.query

  // let result

  // switch (true) {
  //   case title !== undefined:
  //     result = data.data.find((item) => item.title === title)
  //     break
  //   case description !== undefined:
  //     result = data.data.find((item) => item.title === title)
  //     break
  //   case status !== undefined:
  //     result = data.data.filter((item) => item.status === status)
  //     break
  //   default:
  //     break
  // }

  res.status(200).json(data)
}
