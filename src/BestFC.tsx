import React from 'react'
import { Product } from './model/fc'

interface OwnProps extends Product{
}

const BestFC:React.FC<OwnProps> = () => {
  return (
    <div>BestFC</div>
  )
}

export default BestFC