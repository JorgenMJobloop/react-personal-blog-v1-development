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
                {!output.remote}
            </li>
            <li>
                <a href={output.video} referrerPolicy="no-referrer"/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Yi6NxMxCFY8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
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
