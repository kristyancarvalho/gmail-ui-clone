import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './index.module.scss';

export function NavigationBar() {
    return  (
        <nav className={styles.container}>
            <Button
                variant="contained"
                color="secondary"
                className={styles.button}
                startIcon={<DeleteIcon />}
            >
                Delete
            </Button>            
        </nav>
    );
}