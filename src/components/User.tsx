import React from 'react';
import styles from './User.module.scss';

interface UserProps {
    className?: string;
}

const User: React.FC<UserProps> = ({ className }) => {
    return (
        <section className={styles.layout}>
            <div className={styles.grow1}>
                <h2>IP Address</h2>
                <span>192.212.174.101</span>
            </div>
            <div>2</div>
            <div className={styles.grow1}>
                <h2>Location</h2>
                <span>Brooklyn, NY 10001</span>
            </div>
            <div>4</div>
            <div className={styles.grow1}>
                <h2>Timezone</h2>
                <span>UTC -05:00</span>
            </div>
            <div>6</div>
            <div className={styles.grow1}>
                <h2>ISP</h2>
                <span>SpaceX Starlink</span>
            </div>
        </section>

    )
}

export default User;