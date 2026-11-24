import DeleteButton from "@/app/components/DeleteButton";

async function getProduct(id: string) {
    const res = await fetch(`http://localhost:3000/api/products/${id}`);

    return res.json();
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const product = await getProduct(id);

    return (
        <div>
            <span>{product.id}</span>
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
            <DeleteButton id={Number(id)} />
        </div>
    );
}
