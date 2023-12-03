import Link from 'next/link';
import {prisma} from '@/db'
import {WorkoutItem} from "@/components/WorkoutItem";

function getWorkouts() {
    return prisma.workout.findMany()
}

async function getUsers() {
    let users = await prisma.user.findMany()
    let workouts =
        // Include the user's workouts

        console.log(users)

}

export default async function Home() {
    getUsers()
    const workouts = await getWorkouts()
    // @ts-ignore
    return <>
        <header className="flex justify-between items-center mb-4">
            <h1 className="text-2xl">Workouts</h1>
            <nav className="flex justify-between gap-2">
                <Link className=
                          "border border-blue-500 rounded-md px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
                      href="./new"> New Workout </Link>
                <Link
                    className="border border-blue-500 rounded-md px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
                    href="./register"> Register</Link>
            </nav>
        </header>
        <ul className="pl-4">
            {workouts.map((workout) => (
                <WorkoutItem key={workout.id} {...workout}
                />
            ))}
        </ul>
    </>
}