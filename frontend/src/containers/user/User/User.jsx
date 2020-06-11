import React from 'react'
import { follow, unfollow } from '../../../redux/actions/users';

const User = ({ user, myUser }) => {
    const isAlreadyFollowed = myUser?.following.includes(user._id);
    return (<div className="user">
        <img src="https://w7.pngwing.com/pngs/122/453/png-transparent-computer-icons-user-profile-avatar-female-profile-heroes-head-woman.png" alt="" />
        <div className="userDatos">
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>Seguidores:{user.followers.length}</span>
            <span>Seguidos:{user.following.length}</span>
        </div>
        <div className="botones"    >
            <button
            onClick={isAlreadyFollowed ? () =>unfollow(user._id): () => follow(user._id)}
            className={user._id === myUser._id ? 'primary hidden' : 'primary'}
            >{isAlreadyFollowed ? 'Dejar de seguir':'Seguir'}</button>
            {console.log(myUser.followers,user._id,myUser.followers.includes(user._id))}
            <p>{myUser.followers.includes(user._id) && 'Te sigue'}</p>
            
        </div>
    </div>
    )
}

export default User;