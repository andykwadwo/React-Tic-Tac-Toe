import "./post.css";
export function Post({title, author, content}){
    //const button = following ? (<button>Unfollow</button>) : (<button>Follow</button>);
    return (
    <div className="card">
        <h1>{title}</h1>
        <h3>By: {author}</h3>
        <p>{content}</p>
    </div>);
}
