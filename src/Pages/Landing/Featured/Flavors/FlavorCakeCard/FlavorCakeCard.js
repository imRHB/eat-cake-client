import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './FlavorCakeCard.module.css';

const eyeIcon = <FontAwesomeIcon icon={faEye} />;

const FlavorCakeCard = (props) => {
    const { _id, title, img, price } = props.cake;

    return (
        <Card className={`${'h-100 m-3 text-center border-1 bg-light'} ${styles.cakeCard}`}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    ${price}
                </Card.Text>

                <Card.Text>
                    <Link to={`/cake/${_id}`}>
                        <Button variant="secondary"><span className="px-4">{eyeIcon}</span></Button>
                    </Link>
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default FlavorCakeCard;