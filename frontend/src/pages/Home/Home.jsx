import React from 'react';
import styles from './Home.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () =>
{
  const signInLinkstyle = {
    color: '#0077FF',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginLeft: '10px',
  };

  const navigate = useNavigate();
  function startRegister()
  {
    navigate('/register');
  };
  
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Codershouse!" icon="logo">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone!
          While we wrap up the finishing youches, we’re adding people
          gradually to make sure nothing breaks
        </p>
        <div>
          <Button onClick={startRegister} text="Get your username"></Button>
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLinkstyle} to="/login">Sign in</Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
