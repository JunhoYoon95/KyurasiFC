import React from 'react'
import { Address, FC } from './model/fc'

interface OwnProps {
  info: FC,
  changeAddress(address:Address):void
}

const Store:React.FC<OwnProps> = ({info}) => {
  return (
    <div>store</div>
  )
}

export default Store