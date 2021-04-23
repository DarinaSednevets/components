
import PropTypes from 'prop-types'
import styles from './FriendList.module.css'


const FriendList = ({ friends }) => (
    <ul className={styles.list}>
        { friends.map(({ avatar, name, isOnline, id }) =>
            <li key={id} className={styles.item}>
                <span className={styles.status} style={{ backgroundColor: isOnline ? "green" : "red" }}></span>
                <img src={avatar} alt="avatar" width="48" />
                <p>{name}</p>
            </li>
        )}
    </ul>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })
    ).isRequired,
}

export default FriendList;