import {prisma} from "@/db";
import Link from "next/link";
import {redirect} from "next/navigation";

async function loginUser(data: FormData) {
    "use server"
    const username = data.get("username")?.valueOf()
    if (typeof username !== "string" || username.length === 0) {
        throw new Error("Invalid username")
    }
    const password = data.get("password")?.valueOf()
    if (typeof password !== "string" || password.length === 0) {
        throw new Error("Invalid password")
    }
    const user = await prisma.user.findUnique({where: {name: username}})
    if (!user || user.password !== password) {
        throw new Error("Invalid login credentials")
    }
    // Add your own logic here for handling successful login
    redirect("/")
}

export default function Login() {
    return (
        <>
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl">Login</h1>
            </header>
            <form action={loginUser} className="flex flex-col gap-2">
                <label htmlFor="username">Username</label>
                <input type="text" name="username"
                       className="border border-slate-300 bg-transparent rounded px-2 py-2 outline-none focus-within:border-b-slate-100"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"
                       className="border border-slate-300 bg-transparent rounded px-2 py-2 outline-none focus-within:border-b-slate-100"/>
                <div className="flex gap-1 justify-end">
                    <Link href=".."
                          className="border border-blue-500 rounded-md px-4 py-1 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">Cancel
                    </Link>
                    <button type="submit"
                            className="border border-blue-500 rounded-md px-4 py-1 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">Login
                    </button>
                </div>
            </form>
        </>
    )
}