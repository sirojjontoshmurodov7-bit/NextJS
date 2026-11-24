"use client";
export default function DeleteButton({ id }: { id: number }) {
    async function deleteProduct() {
        await fetch(`/api/products/${id}`, {
            method: "DELETE",
        });
        alert("Deleted");
    }
    return <button onClick={deleteProduct}>Delete</button>;
}
