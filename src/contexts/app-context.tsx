import React, { createContext, useContext } from 'react'
import { useImmerReducer } from 'use-immer'
import { AppContextType, AppActionType, DefaultValue } from './app-context.interfaces'

const defaultValue = {
  count: 17,
  longboardDatas: {
    freestyle: []
  }
  // freestyleDetail
}

const AppContext = createContext<AppContextType | undefined>(undefined)
AppContext.displayName = 'app-context' // 在 F12 > React Context 可以看到對應的名稱

const reducer = (draft: DefaultValue, action: AppActionType) => {
  switch (action.type) {
    case 'reset':
      return defaultValue
    case 'addCount':
      draft.count++
      break
    case 'addLbFs':
      draft.longboardDatas.freestyle.push(action.item)
      break
  }
}

const AppContextProvider = (props: any) => {
  const [state, dispatch] = useImmerReducer(reducer, defaultValue)

  const defaultState = {
    ...state,
    dispatch
  }
  return (
    // 將此 context 會使用到的資料、function 統一管理
    <AppContext.Provider value={defaultState}>
      {props.children}
    </AppContext.Provider>
  )
}

const useApp = () => {
  const context = useContext(AppContext)
  if (context === undefined) throw new Error('useApp must be used within a AppContextProvider')
  return context
}

export { AppContextProvider, useApp }
