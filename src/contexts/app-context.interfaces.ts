import React from 'react'

export interface DefaultValue {
  count: number
}
// export type AppActionType =
//   | { type: 'add'}
//   | { type: 'reset'}

export interface AppContextType {
  count: number
  setDefaultState: React.Dispatch<React.SetStateAction<DefaultValue>>
}
