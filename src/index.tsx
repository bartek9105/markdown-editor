import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const queryClient = new QueryClient()

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
			<ToastContainer
				position='bottom-center'
				autoClose={3000}
				hideProgressBar={true}
				newestOnTop={true}
				closeOnClick
				rtl={false}
			/>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
