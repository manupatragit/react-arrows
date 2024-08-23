import { memo } from 'react'

import useArrow from './hooks/useArrow'

const Arrow = ({
  className, head, from, to, onChange, onClick
}) => {
  useArrow({ className, head, from, to, onChange, onClick })
  return null
}

export default memo(Arrow)
export { DIRECTION, HEAD } from '@commutatus/arrows-svg'
