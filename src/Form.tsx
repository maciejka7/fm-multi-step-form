import React from 'react'
import { useForm } from 'react-hook-form';

type Props = {}

export const Form = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register("Name", {required: true, min: 5, maxLength: 80})} />
        <input type="text" placeholder="Email" {...register("Email", {required: true, min: 5, pattern: /^\S+@\S+$/i})} />
        <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, maxLength: 12})} />

        <input type="submit" />
        </form>
    );
}