import { useState, useEffect } from "react"
import WorkoutDetails from "../components/WorkoutDetails"


function Home() {

  const [workouts, setWorkouts] = useState(null)

  useEffect( () => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      console.log(response)
      const json = await response.json()
      if (response.ok) {
        setWorkouts(json)
      }
    }

    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))
        }
      </div>
    </div>
  )
}

export default Home