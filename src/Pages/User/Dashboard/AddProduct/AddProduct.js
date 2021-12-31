import React from 'react';
import { Container } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import styles from './AddProduct.module.css';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);

        fetch(``, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {

            });
    };

    return (
        <div>
            <Container>
                <div className="mb-4">
                    <h3 className="fw-bold">Add Cake</h3>
                </div>

                <div>
                    <Container>
                        <form onSubmit={handleSubmit(onSubmit)} className={`${'pb-4'} ${styles.addProductForm}`}>
                            <input {...register("title", { required: true })} placeholder="Cake title" />

                            <input {...register("img", { required: true })} placeholder="Insert direct image URL" />

                            <select {...register("flavor")}>
                                <option value="Black Forest">Black Forest</option>
                                <option value="Chocolate">Chocolate</option>
                                <option value="Strawberry">Strawberry</option>
                            </select>

                            <textarea {...register("ingredients", { required: true })} placeholder="Ingredients (seperate multiple using a comma)" />

                            <textarea {...register("description", { required: true })} placeholder="Cake description" />

                            <input type="number" {...register("price", { required: true })} placeholder="Cake price" />

                            <input type="submit" value="Add New Cake" className="btn btn-secondary" />
                        </form>
                    </Container>
                </div>
            </Container>
        </div>
    );
};

export default AddProduct;