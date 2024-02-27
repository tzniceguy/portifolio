'use client'
import Card from "./card"

export default function Page(){

    const projects= [
        {name: 'Lugumya', description:'Lugumya Expense Tracker & Budgeting Web App: A user-friendly solution for personal finance management, empowering better expense tracking, budget control, and informed financial decisions.',  href:'/',image: '/projectimage.jpg'},
        {name: 'Shopika', description:'an ecommerce website made with Python Django framework and frontend crafted with html and tailwind css',  href:'/', image: '/projectimage.jpg'},
        {name: 'EDITH', description:'',  href:'/',image: '/projectimage.jpg'},
        {name: 'candSqlLite', description:'A semister project i made in Data insertion and retrieval from database using C and Sqlite Database',  href:'/',image: '/projectimage.jpg'},
    ]

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
                        {projects.map((project, index) => (<Card key={index} name={project.name} description={project.description} href={project.href} image={project.image}
                         />))}
                    </div>
                </div>
            </section>
        </main>
    </div>
    )
}