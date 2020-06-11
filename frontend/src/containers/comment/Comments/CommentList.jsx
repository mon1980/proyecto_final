import React, { useEffect, useState } from 'react';
import { getAllComments, insert } from '../../../redux/actions/comments';
import { connect } from 'react-redux';
import { Skeleton, Pagination } from 'antd';
import Comment from '../Comment/Comment.jsx';
import './CommentList.scss';
const Comments = ({ comments }) => {
    const [loading, setLoading] = useState(true);
    const [totalComments, settotalComments] = useState(5);
    const [totalPages, settotalPages] = useState(5);
    useEffect(() => {
        getAllComments(0)
            .then(res => {
                settotalComments(res.data.totalComments);
                settotalPages(res.data.pages);
            })
            .catch(console.error)
            .finally(() => setLoading(false))
    }, []);
    const handleSubmit = event => {
        event.preventDefault();
        event.persist();
        let message = event.target.message.value
        setLoading(true)
        insert({ message })
            .then(res => {
                settotalComments(res.data.totalComments);
                settotalPages(res.data.pages);
            })
            .then(() => event.target?.reset())
            .finally(() => setLoading(false))
    }
    const onPageChange = value => getAllComments(value - 1)
        .finally(() => setLoading(false))
    return (
        <div className="commentListContainer">
            <Pagination defaultCurrent={1} defaultPageSize={totalPages}
                total={totalComments} onChange={onPageChange} />
            <Skeleton loading={loading} active>
                {comments?.map(comment => <Comment key={comment._id} comment={comment} />)}
            </Skeleton>
            <form onSubmit={handleSubmit}>
                <textarea name="message"></textarea>
                <button className="primary">Enviar comentario</button>
            </form>
             

        </div>
    )
}
const mapStateToProps = ({ comment }) => ({ comments: comment.comments });
export default connect(mapStateToProps)(Comments);