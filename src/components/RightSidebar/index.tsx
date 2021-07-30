import { IconButton } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import styles from './index.module.scss';

export function RightSidebar() {
    return (
        <div className={styles.container}>
            <section className={styles.topRightSidebar}>
                <section className={styles.googleApps}>
                    <IconButton>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/icons/calendar.png" alt="google calendar" />
                    </IconButton>
                    <IconButton>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/icons/keep2020.png" alt="google keep" />
                    </IconButton>
                    <IconButton>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/icons/tasks.png" alt="google tasks" />
                    </IconButton>
                    <IconButton>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/icons/contacts.png" alt="google contacts" />
                    </IconButton>
                </section>

                <div id={styles.separator} />

                <section id={styles.addButton}>
                    <IconButton>
                        <AddIcon style={{ color: "#757575", fontSize: 20 }} />
                    </IconButton>
                </section>
            </section>
            <section className={styles.bottomRightSidebar}>
                <section id={styles.arrowRight}>
                    <IconButton>
                        <ArrowForwardIosIcon style={{ color: "#757575", fontSize: 12 }} />
                    </IconButton>
                </section>
            </section>
        </div>
    );
}