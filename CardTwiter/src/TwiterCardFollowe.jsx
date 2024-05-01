import { useState } from 'react';
import PropTypes from 'prop-types';
export function TwiterCardFollowe({children,userName,initialIsFollowing}){
const [isFollowing,setIsFollowing] = useState(initialIsFollowing);


const hackclick  = () =>{
    setIsFollowing(!isFollowing);  

}
    const text = isFollowing ? 'deja Seguir' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-buttom is-Following' : 'tw-buttom';
    return(
        <article className='tw-card-container'>
            <header className='tw-card-header'>
                <img className='tw-card-imagen' src="https://tse1.mm.bing.net/th?id=OIP.jYLCB1jPO_sKmfQt_lBpsAHaE7&pid=Api&rs=1&c=1&qlt=95&w=164&h=109" alt="" />
          
            <div className='tw-card-informacion'>
                <strong className="nombre">{children}</strong>
                <span className="texto">{userName}</span>
            </div>
            </header>
            <aside className='tw-aside'>
            <button onClick={hackclick} className={buttonClassName}>{text}</button>
            </aside>
           
        </article>
    )

}

TwiterCardFollowe.propTypes = {
    isFollowing: PropTypes.bool.isRequired,
    userName: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    initialIsFollowing: PropTypes.bool.isRequired
  };