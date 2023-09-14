import React from "react"
import { Link } from "@inertiajs/react"

export default function Show({ post }) {
    // console.log(category)
    console.log(post)
    return (
        <section className="px-6 py-8">
            <main className="max-w-6xl mx-auto mt-10 lg:mt-20 space-y-6">
                <article className="max-w-4xl mx-auto lg:grid lg:grid-cols-12 gap-x-10">
                    <div className="col-span-4 lg:text-center lg:pt-14 mb-10">
                        <img src="/images/illustration-1.png" alt="" className="rounded-xl" />

                        <p className="mt-4 block text-gray-400 text-xs">
                            Published <time>1 day ago</time>
                        </p>

                        <div className="flex items-center lg:justify-center text-sm mt-4">
                            <img src="/images/lary-avatar.svg" alt="Lary avatar" />
                            <div className="ml-3 text-left">
                                <h5 className="font-bold">Lary Laracore</h5>
                                <h6>Mascot at Laracasts</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-8">
                        <div className="hidden lg:flex justify-between mb-6">
                            <a
                                href="#"
                                className="transition-colors duration-300 relative inline-flex items-center text-lg hover:text-blue-500"
                            >
                                <svg width="22" height="22" viewBox="0 0 22 22" className="mr-2">
                                    <g fill="none" fillRule="evenodd">
                                        <path
                                            stroke="#000"
                                            strokeOpacity=".012"
                                            strokeWidth=".5"
                                            d="M21 1v20.16H.84V1z"
                                        ></path>
                                        <path
                                            className="fill-current"
                                            d="M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z"
                                        ></path>
                                    </g>
                                </svg>
                                Back to Posts
                            </a>

                            <div className="space-x-2">
                                <a
                                    href="#"
                                    className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                    style={{ fontSize: "10px" }}
                                >
                                    Techniques
                                </a>
                                <a
                                    href="#"
                                    className="px-3 py-1 border border-red-300 rounded-full text-red-300 text-xs uppercase font-semibold"
                                    style={{ fontSize: "10px" }}
                                >
                                    Updates
                                </a>
                            </div>
                        </div>

                        <h1 className="font-bold text-3xl lg:text-4xl mb-10">
                            This is a big title and it will look great on two or even three lines. Wooohoo!
                        </h1>

                        <div className="space-y-4 lg:text-lg leading-loose">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                            </p>

                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit.
                            </p>

                            <h2 className="font-bold text-lg">Sed quia consequuntur</h2>

                            <p>
                                Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                                eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </p>

                            <p>
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                                laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                                reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
                                qui dolorem eum fugiat quo voluptas nulla pariatur?"
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                            </p>

                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit.
                            </p>
                        </div>
                    </div>
                </article>
            </main>
        </section>
    )
}
