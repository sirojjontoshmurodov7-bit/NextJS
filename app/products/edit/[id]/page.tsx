"use client";
import { useState, use } from "react";
export default function EditPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    async function updateProduct() {
        const response = await fetch(`/api/products/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                price: Number(price),
            }),
        });

        const data = await response.json();

        alert("Product updated");
    }
    return (
        <div>
            <div>
                <h1>Edit Product</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Product title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Product price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <button onClick={updateProduct}>Update Product</button>
                </div>
            </div>
        </div>
    );
}
