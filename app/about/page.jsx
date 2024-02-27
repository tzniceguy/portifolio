import Link from "next/link"
import { CiCamera, CiDatabase,CiMail,CiHome} from "react-icons/ci";
import { FaTools } from "react-icons/fa";
import { LuLayout } from "react-icons/lu";

export default function Page() {
  return (
    <div className="w-full p-6">
      <div className="container mx-auto px-4">
        <div className="space-y-4 lg:col-span-2 lg:space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Tzniceguy</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I am the coding maestro from Kishapu,Shinyanga Tanzania, I have fun creating amazing web applications. Whether it’s crafting elegant user interfaces or solving intricate backend puzzles,I will be there thriving on turning challenges into elegant solutions.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 text-sm dark:bg-gray-800">
                HTML
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 text-sm dark:bg-gray-800">
                CSS
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 text-sm dark:bg-gray-800">
                JavaScript
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 text-sm dark:bg-gray-800">
                MySQL
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 text-sm dark:bg-gray-800">
                Next.js
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 text-sm dark:bg-gray-800">
                Django
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 text-sm dark:bg-gray-800">
                Laravel
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Services</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                  <LuLayout className="w-6 h-6" />
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  I can help you build beautiful and functional design systems for your web projects.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                  <CiCamera className="w-6 h-6" />
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  I can perfom serveral  duties in CCTV camera installation 
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                  <FaTools className="w-6 h-6" />
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  I am an expert in computers, Where Maintainance or Troubleshooting, I will be there to help
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                  <CiDatabase  className="w-6 h-6" />
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  I can develop and manage databases using mutiple DBMS (postgres, MySQL,Oracle)
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Contact Me</h2>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="mailto:joeshimbi@hotmail.com"
              >
                <CiMail  className="w-4 h-4" />
                joeshimbi at hotmail.com
              </Link>
              <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <CiHome  className="w-4 h-4" />
                tzniceguy.github.io
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
