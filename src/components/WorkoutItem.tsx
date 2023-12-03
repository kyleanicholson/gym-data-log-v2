type Exercise = {
    title: string
}
type WorkoutItemProps = {
    title: string,
    description: string | null,
};

export function WorkoutItem({ title, description }:WorkoutItemProps){
    return <li className="flex gap-1 item-center">
        <div className="flex flex-col">
            <h2 className="text-xl">{title}</h2>
            <p className="text-gray-500">{description}</p>
        </div>
    </li>
}