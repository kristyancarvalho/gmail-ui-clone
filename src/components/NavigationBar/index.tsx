import { IconButton } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import logo from '../../../public/gmail-logo.png';

import Image from 'next/image';

import styles from './index.module.scss';

export function NavigationBar() {
    return  (
        <nav className={styles.container}>
            <section className={styles.navLeft}>
                <IconButton color="default" aria-label="Menu" component="span">
                    <MenuIcon />
                </IconButton>
                <section>
                    <Image src={logo} alt="logo" placeholder='blur' />
                </section>
            </section>
            <section className={styles.navMiddle}>
                <div className={styles.searchBoxContainer}>
                    <IconButton color="default" aria-label="Search" component="span">
                        <SearchIcon />
                    </IconButton>
                    <input type="text" placeholder="Pesquisar correio"/>
                    <IconButton color="default" aria-label="Tune" component="span">
                        <TuneIcon />
                    </IconButton>
                </div>
            </section>
            <section className={styles.navRight}>
                    <IconButton color="default" aria-label="Help" component="span">
                        <HelpOutlineIcon />
                    </IconButton>
                    <IconButton color="default" aria-label="Settings" component="span">
                        <SettingsIcon />
                    </IconButton>
                    <IconButton color="default" aria-label="Apps" component="span">
                        <AppsIcon />
                    </IconButton>
                    <IconButton color="default" aria-label="Account" component="span">
                        <AccountCircleIcon />
                    </IconButton>
            </section>
        </nav>
    );
}