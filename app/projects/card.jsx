import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Card({name, description, href, image}) {
  return (
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div class="p-4">
            <Image src={image} width="300" height="150" alt={name} class="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center">
            </Image>
        </div>
        <div class="flex flex-col space-y-1.5 p-4">
            <h3 class="whitespace-nowrap tracking-tight text-lg font-medium">
            {name}</h3>
            <p class="text-muted-foreground text-sm"> {description}</p>
        </div>
        <div class="flex items-center p-4">
            <Link class="inline-flex h-6 items-center rounded-md border border-gray-200 bg-white px-2 text-xs font-medium shadow-sm gap-0.5 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
            href={href}>
            Read More
            </Link>
        </div>
    </div>
  )
}
