// import { Provider } from 'react-redux'
import './App.css'
import Calendar from './Calendar'
function App() {
  const calendar = <Calendar />

  return (
    // <Provider store={store}>
    <div className="App">
      <Calendar />
    </div>
    // </Provider>
  )
}

export default App
