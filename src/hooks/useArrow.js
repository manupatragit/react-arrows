import { useLayoutEffect, useRef } from 'react'
import arrowCreate from '@commutatus/arrows-svg'

import { nodeSafe } from '../helpers/node'
import useObserver from './useObserver'

const useArrow = ({ className, head, from, to, onChange, onClick }) => {
  const mounted = useObserver({ from, to })
  const arrowRef = useRef();

  useLayoutEffect(() => {
    if (!arrowRef.current?.setProps) return
    try {
      arrowRef.current.setProps({
        className, head, from, to, onChange, onClick
      })
    } catch (e) {
      console.error(e)
    }
  }, [className, head, from, to, onChange, onClick])

  useLayoutEffect(() => {
    if (!mounted) return

    try {
      arrowRef.current = arrowCreate({
        className,
        head,
        from: {
          ...from,
          node: nodeSafe(from),
        },
        to: {
          ...to,
          node: nodeSafe(to),
        },
        onChange,
        onClick
      })
    } catch (e) {
      console.warn(e);
      return;
    }

    document.body.appendChild(arrowRef.current.node)

    return () => {
      arrowRef.current.clear()
      arrowRef.current = null
    }
  }, [mounted])
}

export default useArrow
