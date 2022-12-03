import data from '../utils/data';
import CommentsTemplate from './components/commentsTemplate';

const commentsCard = () => {
  return (
    <div className='grid grid-cols-1 gap-1 md:grid-cols-3 lg:grid-cols-4'>
    {data.comments.map((comment) => (
        <CommentsTemplate comments={comment} key={comment.id}/>
    ))}
    </div>
  )
}

export default commentsCard