import React from 'react'
import { DeleteOutlined } from '@ant-design/icons';
import { deleteOne } from '../../../redux/actions/comments';
const Comment = ({comment}) => {
    return (
        <div className="comment">
            <span>
            {comment.message}</span>
            <DeleteOutlined onClick={deleteOne.bind(this,comment._id)} />
            </div>
    )
}
export default Comment;