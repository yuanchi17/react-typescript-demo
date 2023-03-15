import React, { createContext, useState } from 'react'
import { AppContextType, DefaultValue } from './app-context.interfaces'

const AppContext = createContext<AppContextType | undefined>(undefined)
AppContext.displayName = 'app-context' // 在 F12 > React Context 可以看到對應的名稱

// const reducer = (draft: AppContextType, action: AppActionType) => {
//   switch (action.type) {
//     case 'reset':
//       return 0
//     case 'add':
//       return draft.count++
//   }
// }

// TODO: 改用 useImmerReducer，把預設的 value 拉出來
const AppContextProvider = (props: any) => {
  const [defaultState, setDefaultState] = useState<DefaultValue>({ count: 17 })
  // const [datas, setDatas] = useState(['test'])

  // const defaultState = {
  //   count,
  //   datas
  // }
  return (
    // 將此 context 會使用到的資料、function 統一管理
    <AppContext.Provider value={{ ...defaultState, setDefaultState }}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, AppContext }
