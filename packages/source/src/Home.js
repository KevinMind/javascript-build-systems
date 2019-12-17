import React from 'react';
import logo from './react.svg';
import cn from 'classnames/bind';

import styles from './Home.scss';

const cx = cn.bind(styles);

class Home extends React.Component {
  render() {
    return (
      <div className={cx('Home')}>
        <div className={cx('Header')}>
          <img src={logo} className={cx('Logo')} alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p className={cx('Intro')}>
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Home.js</code> and save to reload.
        </p>
        <ul className={cx('Resources')}>
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
