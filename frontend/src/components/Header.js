import React from 'react';
import { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  });

  const connectWallet = async () => {
    if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
        console.log(walletAddress);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log('Please install Metamask');
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(walletAddress);
        } else {
          console.log('Connect to a Metamask using the Connect button');
        }
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log('Please install Metamask');
    }
  };

  const addWalletListener = async () => {
    if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
      window.ethereum.on('accountsChanged', (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      setWalletAddress('');
      console.log('Please install Metamask');
    }
  };

  return (
    <header className="header">
      <Navbar collapseOnSelect expand="sm" className="navbar">
        <Container fluid="lg">
          <LinkContainer to="/">
            <Navbar.Brand className="navbar__brand">
              <h3>SportNFT</h3>
              {/* <img
                  src={logoMSR}
                  className="logo"
                  alt="logo de Mujer Sin Reglas"
                ></img> */}
            </Navbar.Brand>
          </LinkContainer>

          <button onClick={connectWallet} className="btnwallet">
            <span>
              {walletAddress && walletAddress.length > 0
                ? `Connected: ${walletAddress.substring(
                    0,
                    6
                  )}...${walletAddress.substring(38)}`
                : 'Connect wallet'}
            </span>
          </button>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
