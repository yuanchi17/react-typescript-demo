import React, { createContext, useState } from 'react'
import { AppContextType } from './app-context.interfaces'

// const AppContext = createContext<AppContextType | undefined>(undefined)
const AppContext = createContext<AppContextType | undefined>(undefined)
AppContext.displayName = 'app-context' // 在 F12 > React Context 可以看到對應的名稱

const AppContextProvider = (props: any) => {
  const [defaultState, setDefaultState] = useState<AppContextType>({ count: 17 })
  // const [datas, setDatas] = useState(['test'])

  // const defaultState = {
  //   count,
  //   datas
  // }
  return (
    // 將此 context 會使用到的資料、function 統一管理
    <AppContext.Provider value={defaultState}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, AppContext }
