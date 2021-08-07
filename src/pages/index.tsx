import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import { NavigationBar } from '../components/NavigationBar';
import { LeftSidebar } from '../components/LeftSidebar';
import { RightSidebar } from '../components/RightSidebar';

import styles from '../styles/Home.module.scss';
import { Mail } from '../components/MailComponent';

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className={styles.mainContainer}>
        <LeftSidebar />
        <section className={styles.contentContainer}>
            <div className={styles.mailOptions}>
              <section className={styles.mailOptionsLeft}>
                <Button>
                  <CheckBoxOutlineBlankIcon style={{ color: "#757575" }} />
                  <ArrowDropDownIcon style={{ color: "#757575", fontSize: 20 }} />
                </Button>
                <a href="">
                  <IconButton>
                    <RefreshIcon style={{ fontSize: 20 }} />
                  </IconButton>
                </a>
                <IconButton>
                    <MoreVertIcon style={{ color: "#757575", fontSize: 20 }} />
                </IconButton>
              </section>

              <section className={styles.mailOptionsRight}>
                <button id={styles.mailsNumber}>
                  1–7 de 7
                </button>
                <IconButton>
                    <ChevronLeftIcon style={{ color: "#757575", fontSize: 20 }} />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon style={{ color: "#757575", fontSize: 20 }} />
                </IconButton>
              </section>
            </div>
            <div className={styles.mailNav}>
              <section className={styles.mailNavItemContainer}>
                <button id={styles.selected} className={styles.mailNavItem}>
                  <span>
                    <InboxIcon style={{ fontSize: 20 }} />
                    <span id={styles.mailNavItemTitle}>
                      Principal
                    </span>
                  </span>
                </button>
              </section>

              <section className={styles.mailNavItemContainer}>
                <button className={styles.mailNavItem}>
                  <span>
                    <PeopleIcon style={{ fontSize: 20 }} />
                    <span id={styles.mailNavItemTitle}>
                      Social
                    </span>
                  </span>
                </button>
              </section>

              <section className={styles.mailNavItemContainer}>
                <button className={styles.mailNavItem}>
                  <span>
                    <LocalOfferIcon style={{ fontSize: 20 }} />
                    <span id={styles.mailNavItemTitle}>
                      Promoções 
                    </span>
                  </span>
                </button>
              </section>
            </div>
            
            <section className={styles.mailSection}>
              <Mail />
              <Mail />
              <Mail />
              <Mail />
              <Mail />
              <Mail />
              <Mail />
            </section>
        </section>
        <RightSidebar />
      </main>
    </>
  )
}
