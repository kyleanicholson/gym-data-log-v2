import {prisma} from "@/db";
import Link from "next/link";
import {redirect} from "next/navigation";

async function createUser(data: FormData) {
    "use server"
    const username = data.get("username")?.valueOf()
    if (typeof username !== "string" || username.length === 0) {
        throw new Error("Invalid username")
    }
    const email = data.get("email")?.valueOf()
    if (typeof email !== "string" || email.length === 0) {
        throw new Error("Invalid email")
    }
    const password = data.get("password")?.valueOf()
    if (typeof password !== "string" || password.length === 0) {
        throw new Error("Invalid password")
    }
    await prisma.user.create({data: {name: username, email, password}})

    redirect("/")
}

export default function Register() {
    return (
        <>
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl">Create an Account</h1>
            </header>
            <form action={createUser} className="flex flex-col gap-2">
                <label htmlFor="username">Username</label>
                <input type="text" name="username"
                       className="border border-slate-300 bg-transparent rounded px-2 py-2 outline-none focus-within:border-b-slate-100 required"/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"
                       className="border border-slate-300 bg-transparent rounded px-2 py-2 outline-none focus-within:border-b-slate-100 required"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"
                       className="border border-slate-300 bg-transparent rounded px-2 py-2 outline-none focus-within:border-b-slate-100 required"/>
                <div className="flex gap-2 justify-end">
                    <Link href=".."
                          className="border border-red-500 rounded-md px-4 py-1 text-red-500 hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">Cancel
                    </Link>
                    <button type="submit"
                            className="border border-blue-500 rounded-md px-4 py-1 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">Create
                    </button>
                </div>

            </form>
        </>
    )
}