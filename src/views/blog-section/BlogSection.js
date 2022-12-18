import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Tilt from 'react-parallax-tilt';
import './BlogSection.css';

const BlogSection = () => {
  return (
    <div id="blogs">
      <Container>
        <h1 className="text-center font-details-b pb-4">Medium Blogs</h1>
        <CardDeck>
          <Tilt>
            <Card className="card-resize">
              <Card.Img
                className="image-resize"
                variant="top"
                src="https://miro.medium.com/"
                alt="Blog 2"
              />
              <Card.Body>
                <a
                  className="text-dark text-decoration-none"
                  href="https://medium.com/"
                  target="_blank"
                >
                  <Card.Title>.</Card.Title>
                  <Card.Text>.</Card.Text>
                </a>
              </Card.Body>
            </Card>
          </Tilt>
        </CardDeck>
      </Container>
    </div>
  );
};
export default BlogSection;
