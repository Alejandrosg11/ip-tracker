import React from 'react';
import styles from './User.module.scss';
import { UserProps } from "../types/types";

const User: React.FC<UserProps> = ({ ipData }) => {
    return (
        <section className={styles.layout}>
            <div className={styles.grow1}>
                <h2>IP Address</h2>
                <span>{ipData ? ipData.ip : "N/A"}</span>
            </div>
            <div>2</div>
            <div className={styles.grow1}>
                <h2>Location</h2>
                <span>{ipData ? `${ipData.location.region}, ${ipData.location.country}` : "N/A"}</span>
            </div>
            <div>4</div>
            <div className={styles.grow1}>
                <h2>Timezone</h2>
                <span>{ipData ? `UTC ${ipData.location.timezone}` : "N/A"}</span>
            </div>
            <div>6</div>
            <div className={styles.grow1}>
                <h2>ISP</h2>
                <span>{ipData ? ipData.isp : "N/A"}</span>
            </div>
        </section>

    )
}

export default User;