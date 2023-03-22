import * as React from "react"
import WeeklyRoutineComponent from "../components/weeklyRoutine";

import OtherLayout from "../layouts/otherLayout";

const WeeklyRoutine = () => {
  return (
    <OtherLayout>
        <WeeklyRoutineComponent/>
    </OtherLayout>
  )
}

export default WeeklyRoutine;

export const Head = () => <title>Sukoon || Weekly Routine Page</title>;
