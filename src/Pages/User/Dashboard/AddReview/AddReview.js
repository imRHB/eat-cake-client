import React from 'react';
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import ReactStars from "react-rating-stars-component";
import useAuth from "../../../../hooks/useAuth";
import styles from './AddReview.module.css';

const AddReview = () => {
    const [rating, setRating] = useState('');

    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const handleRating = rating => {
        setRating(rating);
    };

    const onSubmit = data => {
        data.name = user?.displayName;
        data.email = user?.email;
        data.rating = rating;

        fetch(`http://localhost:5000/add-review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {

            });
        reset();
    };

    return (
        <div>
            <Container>
                <div className="mb-4">
                    <h3 className="fw-bold">Give Us Review</h3>
                </div>

                <div>
                    <Container>
                        <div>
                            <ReactStars
                                classNames={`${styles.ratingContainer}`}
                                name="rating"
                                onChange={handleRating}
                                size={40}
                                isHalf={true}
                                required
                            />
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className={`${'pb-4'} ${styles.addReviewForm}`}>
                            <textarea {...register("comment", { required: true })} placeholder="Your comment" />

                            <input type="submit" value="Add Review" className="btn btn-secondary" />
                        </form>
                    </Container>
                </div>
            </Container>
        </div>
    );
};

export default AddReview;