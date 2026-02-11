import { books } from './Books';

export default function Library(){
    return(
        <div>
            <h2>Library Component</h2>
            <p>This is a simple Library component.</p>
            <p>Books available: {books.length} </p>
        </div>
    )
}