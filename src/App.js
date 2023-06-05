/* eslint-disable */

import "./App.css";
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import Data from "./data";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./Detail";
import axios from "axios";
import React from "react";
import Cart from "./Cart.js";

let 재고context = React.createContext();

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/detail">
              Detail
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Jumbotron className="background">
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>

          <div className="container">
            <재고context.Provider value={재고}>
              <div className="row">
                {/* <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
            <h4>{shoes[0].title}</h4>
            <p>
              {shoes[0].content} &amp; {shoes[0].price}{" "}
            </p>
          </div> */}

                {shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} key={i} />;
                })}

                {/* {shoes.map((a, i) => {
            return (
              <div className="col-md-4">
                <img
                  src="https://codingapple1.github.io/shop/shoes3.jpg"
                  width="100%"
                />
                <h4>{shoes[i].title}</h4>
                <p>
                  {shoes[i].content} &amp; {shoes[i].price}
                </p>
              </div>
            );
          })} */}
              </div>
            </재고context.Provider>
            <div
              className="btn btn-primary"
              onClick={() => {
                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then((result) => {
                    // console.log(result.data);
                    shoes변경([...shoes, ...result.data]);
                  })
                  .catch(() => {
                    console.log("실패");
                  });
              }}
            >
              더보기
            </div>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route>

        <Route path="/:id">
          <div>아무거나</div>
        </Route>
      </Switch>

      {/* <Route path="/페이지이름" component={modal}></Route> */}
    </div>
  );
}

function Card(props) {
  let 재고 = useContext(재고context);

  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} &amp; {props.shoes.price}{" "}
      </p>
      <Test />
    </div>
  );
}
function Test() {
  let 재고 = useContext(재고context);
  return <p>{재고[0]}</p>;
}

export default App;
