import React from "react"

export default function Comment() {
    return (
        <article className="flex bg-gray-100 border border-gray-200 p-4 rounded-md space-x-6">
            <div className="flex-shrink-0 rounded-full overflow-hidden">
                <img className="rounded-full" src="https://i.pravatar.cc/60" alt="" width="60" height="60" />
            </div>

            <div>
                <header className="mb-4">
                    <h3 className="font-bold">Jhon Doe</h3>
                    <p className="text-xs">
                        months ago Posted <time>8 </time>
                    </p>
                </header>

                <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi eius esse eum nemo nihil
                    obcaecati temporibus ullam vero voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur dicta omnis sed.
                </p>
            </div>
        </article>
    )
}
