import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";

const Pillbox = () => {
    const position = [40.6689, -73.9851];

    return (
        <Container>
            <Row className="justify-content-center align-items-center">
                <Col md={6}>
                    <div className="pillbox">
                        <h2 className="text-center">Map</h2>
                        <MapContainer center={position} zoom={13} style={{ height: "200px"}}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={position}>
                                <Popup>
                                    471 5th Ave, Brooklyn, NY 11215
                                </Popup>
                            </Marker>
                        </MapContainer>
                        <div className="opening-hours mt-3">
                            <h4>471 5th Ave.<br />Brooklyn, NY 11215</h4>
                            <p>Opening Hours</p>
                            <ul>
                                <li>Monday: 11am-11pm</li>
                                <li>Tuesday: 11am-11pm</li>
                                <li>Wednesday: 11am-11pm</li>
                                <li>Thursday: 11am-11pm</li>
                                <li>Friday: 11am-12pm</li>
                                <li>Saturday: 10am-12pm</li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Pillbox;
