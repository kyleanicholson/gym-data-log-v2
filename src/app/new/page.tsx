import Link from "next/link";
import {prisma} from "@/db";
import {redirect} from "next/navigation";

async function createWorkout(data: FormData){
    "use server"
    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length === 0){
        throw new Error("Invalid title")
    }
    await prisma.workout.create({data: {title, userId:'878851e5-01b9-4ff1-b1c2-5dc4e72246eb'}})
    redirect("/")
}
export default function New(){
    return (<>
        <header className="flex justify-between items-center mb-4">
            <h1 className="text-2xl">New Workout</h1>
        </header>
        <form action = {createWorkout} className="flex gap-2 flex-col">
            <input type="text" name="title" className="border border-slate-300 bg-transparent rounded px-2 py-2 outline-none focus-within:border-b-slate-100"/>
            <div className="flex gap-1 justify-end">
                <Link href=".." className="border border-blue-500 rounded-md px-4 py-1 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">Cancel
                </Link>
                <button type = "submit" className="border border-blue-500 rounded-md px-4 py-1 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">Create</button>
            </div>
        </form>

    </>)
}