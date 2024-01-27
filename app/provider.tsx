'use client';
import React from 'react'
import { store } from '../store/store'
import { Provider } from 'react-redux'

const ReduxProvider = ({ children }: React.PropsWithChildren) => {
 
	return (
		<div>
			<Provider store={store}>
				{children}
			</Provider>
		</div>
	)
}

export default ReduxProvider




