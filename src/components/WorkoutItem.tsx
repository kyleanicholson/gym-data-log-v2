type WorkoutItemProps = {
  title: string;
  workoutType: string;
  exercises?: Exercise[];
};
type Exercise = {
  id: string;
  title: string;
  duration?: number;
  sets: Set[];
  description?: string;
};
type Set = {
  id: string;
  reps: number;
  weight: number;
  rpe?: number;
  rest?: number;
};

export function WorkoutItem({
  title,
  workoutType,
  exercises = [],
}: WorkoutItemProps) {
  return (
    <li className="flex gap-1 item-center">
      <div className="flex flex-col">
        <h2 className="text-xl">{title}</h2>
        <p className="text-gray-500">{workoutType}</p>
        <ul className="py-2">
          {exercises.map((exercise) => (
            <li key={exercise.id}>
              {exercise.title}
              {workoutType === "Resistance" && exercise.sets && (
                <table>
                  <thead>
                    <tr>
                      <th>Weight</th>
                      <th>Reps</th>
                      <th>RPE</th>
                      <th>Rest</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exercise.sets.map((set, index) => (
                      <tr key={index}>
                        <td>{set.weight}</td>
                        <td>{set.reps}</td>
                        <td>{set.rpe}</td>
                        <td>{set.rest}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {workoutType === "Cardio" && <p>Duration: {exercise.duration}</p>}
              {workoutType !== "Cardio" &&
                workoutType !== "Resistance" &&
                exercise.description && (
                  <p>Description: {exercise.description}</p>
                )}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
