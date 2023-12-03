import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col items-center justify-center gap-6">
                <h1 className="text-4xl mb-2">Welcome to Gym Data Log</h1>
                <Image src="/barbell_light.svg" alt="Barbell" width={300} height={300}/>
                <p className="text-xl mb-4">Track your workouts, monitor your progress, and achieve your fitness
                    goals.</p>
                <div className="flex gap-2">
                    <Link href="/login">
                        <button
                            className="border border-b-emerald-500 rounded-md px-4 py-2 text-emerald-500 hover:bg-emerald-500 hover:text-white transition duration-300 ease-in-out">Login
                        </button>
                    </Link>
                    <Link href="/register">
                        <button
                            className="border border-b-emerald-500 rounded-md px-4 py-2 text-emerald-500 hover:bg-emerald-500 hover:text-white transition duration-300 ease-in-out">Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}