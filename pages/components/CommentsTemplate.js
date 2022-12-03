
const CommentsTemplate = ({comment}) => {
  return (
    <div className='card'>
        <h2 className='text-xl font-bold'>{comment.name}</h2>
        <h6 className='font-semibold'>Email: {comment.email}</h6>
        <p className="text-slate-300 font-light">{comment.body}</p>
    </div>
  )
}

export default CommentsTemplate;