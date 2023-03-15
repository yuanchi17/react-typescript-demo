import React from 'react'

export interface DefaultValue {
  count: number
  longboardDatas: {
    freestyle: string[]
  }
}
export type AppActionType =
  | { type: 'addCount'}
  | { type: 'addLbFs', item: string}
  | { type: 'reset'}

export interface AppContextType extends DefaultValue {
  dispatch: React.Dispatch<AppActionType>
}
