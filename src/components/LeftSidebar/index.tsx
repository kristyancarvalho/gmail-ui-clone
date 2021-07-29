import { Avatar, Badge, IconButton } from '@material-ui/core';

import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles';

import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';

import Link from 'next/link';

import styles from './index.module.scss';

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }),
)(Badge);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export function LeftSidebar() {
    const classes = useStyles();

    return (
        <div className={styles.container}>
            <section className={styles.topLeftSidebar}>
                <button id={styles.newMessageButton}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/send-Message-Icon.png" alt="Send-message-icon" />
                    Compor
                </button>
            </section>
            <section className={styles.middleLeftSidebar}>
                <Link href="/">
                    <a id={styles.inbox}>
                        <section>
                            <InboxIcon style={{ fontSize: 20 }}/>
                        </section>

                        <span>
                            Caixa de entrada
                        </span>
                        
                        <span id={styles.emailsNumber}>
                            7
                        </span>
                    </a>
                </Link>
                
                <Link href="/">
                    <a>
                        <section>
                            <StarIcon  style={{ color: "#757575", fontSize: 20 }} />
                        </section>

                        <span>
                            Com estrela
                        </span>
                    </a>
                </Link>

                <Link href="/">
                    <a>
                        <section>
                            <WatchLaterIcon style={{ color: "#757575", fontSize: 20 }} />
                        </section>

                        <span>
                            Suspenso
                        </span>
                    </a>
                </Link>

                <Link href="/">
                    <a>
                        <section>
                            <SendIcon style={{ color: "#757575", fontSize: 20 }}/>
                        </section>

                        <span>
                            Enviado
                        </span>
                    </a>
                </Link>

                <Link href="/">
                    <a>
                        <section>
                            <InsertDriveFileIcon style={{ color: "#757575", fontSize: 20 }} />
                        </section>

                        <span>
                            Rascunhos
                        </span>
                    </a>
                </Link>
                <button className={styles.buttons} id={styles.expandMore}>
                    <section>
                        <ExpandMoreIcon style={{ color: "#757575", fontSize: 20 }} />
                    </section>

                    <span>
                        Mais
                    </span>
                </button>
            </section>

            <section className={styles.bottomLeftSidebar}>
                <div className={styles.googleMeet}>
                    <section id={styles.meetTitle}>
                        <span>
                            Meet
                        </span>
                    </section>

                    <section>
                        <button className={styles.buttons} id={styles.newTreffen}>
                            <section>
                                <VideocamIcon style={{ color: "#757575", fontSize: 20 }} />
                            </section>

                            <span>
                                Nova reunião
                            </span>
                        </button>

                        <button className={styles.buttons} id={styles.joinTreffen}>
                            <section>
                                <KeyboardIcon style={{ color: "#757575", fontSize: 20 }} />
                            </section>

                            <span>
                                Participar em reunião
                            </span>
                        </button>
                    </section>
                </div>

                <div className={styles.googleHangouts}>
                    <section id={styles.hangoutsTitle}>
                        <span>
                            Hangouts
                        </span>
                    </section>

                    <section className={styles.userOptions}>
                        <section className={styles.userOptionsLeft}>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                                }}
                                variant="dot"
                            >
                                <Avatar alt="Avatar" style={{ height: 30, width: 30 }} />
                            </StyledBadge>

                            <button>
                                User
                                <ArrowDropDownIcon style={{ color: "#757575", fontSize: 20 }} />
                            </button>
                        </section>

                        <section className={styles.userOptionsRight}>
                            <IconButton aria-label="New conversation">
                                <AddIcon style={{ color: "#757575", fontSize: 20 }} />
                            </IconButton>
                        </section>
                    </section>

                    <section className={styles.hangoutsOptions}>
                        <section className={styles.hangoutsOptionsContent}>
                            <span>
                                Não existem chats recentes
                            </span>
                            <button>
                                Iniciar um novo
                            </button>
                        </section>
                    </section>
                </div>
                <section className={styles.hangoutsButton}>
                    <button className={styles.buttons}>
                        <PersonIcon style={{ color: "#757575", fontSize: 20 }} />
                    </button>
                    <button className={styles.buttons} id={styles.selected}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/icons/hangouts.png" alt="hangoutsLogo" />
                    </button>
                    <button className={styles.buttons}>
                        <PhoneIcon style={{ color: "#757575", fontSize: 20 }} />
                    </button>
                </section>
            </section>
        </div>
    );
}