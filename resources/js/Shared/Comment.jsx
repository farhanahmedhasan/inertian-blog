import React from "react"
import moment from "moment"

export default function Comment({ comment }) {
    return (
        <article className="flex bg-gray-100 border border-gray-200 p-4 rounded-md space-x-6">
            <div className="flex-shrink-0 rounded-full overflow-hidden">
                <img
                    className="rounded-full"
                    src={`https://i.pravatar.cc/60?u=${comment.id}`}
                    alt=""
                    width="60"
                    height="60"
                />
            </div>

            <div>
                <header className="mb-4">
                    <h3 className="font-bold">{comment.author.username}</h3>
                    <p className="text-xs">
                        Posted <time>{moment(comment.created_at).fromNow()}</time>
                    </p>
                </header>

                <div dangerouslySetInnerHTML={{ __html: comment.body }}></div>
            </div>
        </article>
    )
}
