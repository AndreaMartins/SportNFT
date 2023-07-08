import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { listCompetitors } from '../actions/competitorActions.js';

import { Link } from 'react-router-dom';
// Bootstrap Components
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const competitorList = useSelector((state) => state.competitorList);
  const { loading, error, competitors } = competitorList;

  useEffect(() => {
    dispatch(listCompetitors());
  }, [dispatch]);

  const mintNFT = (id) => {
    console.log(id);
  };

  return (
    <section className="home mt-5">
      <Container fluid>
        <h2 className="mb-3">Federation / Institution</h2>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>AddressWallet</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((competitor) => (
              <tr key={competitor._id}>
                <td>{competitor.name}</td>
                <td>{competitor.category}</td>
                <td>{competitor.walletAddress}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => mintNFT(competitor._id)}
                  >
                    mintNFT
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </section>
  );
};

export default HomeScreen;
