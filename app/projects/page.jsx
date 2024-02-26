'use client'
import Card from "./card"

export default function Page(){
    return(
    <div class="flex min-h-screen flex-col">
        <main class="flex-1">
            <section class="py-12 md:py-16 lg:py-20 xl:py-24">
                <div class="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
                    <div class="space-y-3">
                        <h1 class="text-3xl font-bold tracking-tighter md:text-5xl lg:text-6xl">Project Showcase</h1>
                        <p class="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">A beautiful showcase of my projects.</p>
                    </div>
                </div>
            </section>
            <section class="py-12 md:py-16 lg:py-20 xl:py-24">
                <div class="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:gap-16 xl:gap-20">
                    <div class="space-y-3">
                        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My projects</h2>
                    </div>
                    <div class="grid w-full grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3 xl:max-w-6xl xl:grid-cols-3 xl:gap-10">
                        <Card/>
                    </div>
                </div>
            </section>
        </main>
    </div>
    )
}