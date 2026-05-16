import React, { createContext, useMemo, useState } from 'react'

const UiContext = createContext(null)

export const UiProvider = ({ children }) => {
  const [commandOpen, setCommandOpen] = useState(false)
  const value = useMemo(() => ({ commandOpen, setCommandOpen }), [commandOpen])

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>
}
