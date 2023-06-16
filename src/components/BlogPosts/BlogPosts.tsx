import { blogData } from "./blogData"

export default function BlogPosts() {
    const output = blogData;
    return (
        <>
        <div className="blogCard">
            <section className="blogContent">
            <ul>
            <li>
                <h1> Author:
                {output.author}
                </h1>
            </li>
            <li>
                <h4> Subject:
                {output.subject}
                </h4>
            </li>
            <li>
            {output.post}   
            </li>
            <li>
                {output.postID}
            </li>
            <li>
                {output.remote}
            </li>
            <li> 
                <h4> Date: 
                {output.date}
                </h4>
            </li>
            </ul>
            </section>
        </div>
        </>
    )
}
