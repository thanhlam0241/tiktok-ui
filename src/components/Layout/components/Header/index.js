import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../asset/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'; //alt + mui ten dich chuyen
const cx = classNames.bind(styles);
// spin = { true}
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='logo' />
                </div>
                <div className={cx('search')}>
                    <input placeholder='Search acounts and videos' spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    </button>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}>
                </div>
            </div>
        </header>
    );
}

export default Header;