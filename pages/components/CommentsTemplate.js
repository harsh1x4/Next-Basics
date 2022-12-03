
const CommentsTemplate = ({comments}) => {
  return (
    <div className='card'>
        <h2 className='text-xl font-bold'>{comments.name}</h2>
        <h6 className='font-semibold'>Email: {comments.email}</h6>
        <p className="text-slate-300 font-light">{comments.body}</p>
    </div>
  )
}

export default CommentsTemplate;