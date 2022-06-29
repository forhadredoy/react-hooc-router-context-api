
import { useParams } from 'react-router-dom';

function Posts() {
    const {catagory} = useParams();
    return (
        <div>
            <h1>this is forhad and redoy{catagory}</h1>
            
        </div>
    );
}

export default Posts;