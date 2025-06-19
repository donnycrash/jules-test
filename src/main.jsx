import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Statsig } from '@statsig/js-client'
import { StatsigProvider } from '@statsig/react-bindings'

// Create a StatsigUser object
const statsigUser = {
  userID: 'a-hardcoded-user-id', // Ideally, this should be dynamic
  // You can add other custom properties here, for example:
  // email: 'test.user@example.com',
  // custom: {
  //   role: 'admin',
  // }
}

// Initialize Statsig
Statsig.initialize('YOUR_CLIENT_API_KEY', statsigUser)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StatsigProvider
      client={Statsig}
      user={statsigUser}
      waitForInitialization={true} // Recommended to ensure Statsig is ready
    >
      <App />
    </StatsigProvider>
  </StrictMode>,
)
