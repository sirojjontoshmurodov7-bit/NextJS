"use client";
import { useState } from "react";
export default function AddProductPage() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const product = {
            id: Date.now(),
            title,
            price: Number(price),
        };
        const response = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data = await response.json();
        console.log(data);
        alert("Product created");
        setTitle("");
        setPrice("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <button>Create Product</button>
        </form>
    );
}
