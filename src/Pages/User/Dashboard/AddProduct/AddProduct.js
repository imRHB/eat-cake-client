import React from 'react';
import { Container } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from "react-toastify";
import styles from './AddProduct.module.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch(`https://agile-tor-11686.herokuapp.com/cake`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {

            });

        toast.success(`New Cake added successfully`, {
            position: "bottom-left",
            autoClose: 2000,
        });
        reset();
    };

    return (
        <div>
            <ToastContainer />

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