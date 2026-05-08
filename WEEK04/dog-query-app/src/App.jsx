import { useState } from 'react'
import BreedList from './BreedList'
import BreedDetail from './BreedDetail'
import DogFacts from './DogFacts'
import DogGroups from './DogGroups'
import './App.css'

export default function App() {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <div className="app">
      <div className="left-panel">
        <BreedList onSelect={setSelectedId} selectedId={selectedId} />
      </div>
      <div className="right-panel">
        {selectedId
          ? <BreedDetail id={selectedId} />
          : <p className="placeholder">Select a breed to see details</p>
        }
        <DogFacts selectedId={selectedId} />  {/*when selectedId changed, new fetch (random dog fact will be changed)*/}
        <DogGroups />
      </div>
    </div>
  )
}