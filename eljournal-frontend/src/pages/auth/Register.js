import React from 'react';

export default function Register() {
    return (
        <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
            <section className="flex w-[30rem] flex-col space-y-6">
                <div className="text-center text-4xl font-medium">Create Account</div>

                <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                    <input type="text" id="username" placeholder="Username" className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none" />
                </div>

                <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                    <input type="email" id="email" placeholder="Email" className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none" />
                </div>

                <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                    <input type="password" id="password" placeholder="Password" className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none" />
                </div>

                <button className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">REGISTER</button>

                <p className="text-center text-lg">
                    Already have an account? <a href="/login" className="font-medium text-indigo-500 underline-offset-4 hover:underline">Log In</a>
                </p>
            </section>
        </main>
    );
}
