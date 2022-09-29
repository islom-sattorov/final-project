import { useSelector } from "react-redux";
import { selectAllAuthors } from "../../features/authors/authorsSlice";

const BlogAuthor = ({ authorId, spanClass }) => {
    const authors = useSelector(selectAllAuthors);

    const author = authors.find(person => person.id === authorId);

    return <span className={spanClass}>by {author ? author.name : 'Unknown author'}</span>
}

export default BlogAuthor