import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import DraftsIcon from '@material-ui/icons/Drafts';
import WatchLaterIcon from '@material-ui/icons/WatchLater';

import { IconButton } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import styles from './index.module.scss';

export function Mail() {
    return (
        <div className={styles.mailContainer}>
            <section className={styles.mailLeft}>
                <section id={styles.hidedOption}>
                    <DragIndicatorIcon style={{ color: "#ecf0f1", fontSize: 20 }} />
                </section>
                <section id={styles.leftOptions}>
                    <Box mr={ -2 }>
                        <IconButton>
                            <CheckBoxOutlineBlankIcon style={{ color: "lightgrey", fontSize: 20 }} />
                        </IconButton>
                    </Box>
                    <IconButton>
                        <StarBorderIcon style={{ color: "lightgrey", fontSize: 20 }} />
                    </IconButton>
                </section>
                <span>EmailName</span>
            </section>
            <section className={styles.mailMiddle}>
                <span id={styles.mailTitle}>
                    EmailTitle
                </span>
                <div id={styles.separator} />
                <span id={styles.mailSubject}>
                    EmailSubject
                </span>
            </section>
            <section className={styles.mailRight}>
                <section id={styles.visibleInfo}>
                    <span>6 de ago.</span>
                </section>
                <section id={styles.hidedOptions}>
                    <IconButton>
                        <ArchiveIcon style={{ color: "#757575", fontSize: 20 }} />
                    </IconButton>
                    <section className={styles.iconButtonBox}>
                        <IconButton>
                            <DeleteIcon style={{ color: "#757575", fontSize: 20 }} />
                        </IconButton>    
                    </section>
                    <section className={styles.iconButtonBox}>
                        <IconButton>
                            <DraftsIcon style={{ color: "#757575", fontSize: 20 }} />
                        </IconButton>
                    </section>
                    <section className={styles.iconButtonBox}>
                        <IconButton>
                            <WatchLaterIcon style={{ color: "#757575", fontSize: 20 }} />
                        </IconButton>
                    </section>
                </section>
            </section>
        </div>
    );
}