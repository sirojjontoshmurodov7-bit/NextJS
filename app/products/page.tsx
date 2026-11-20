import Link from "next/link";

async function getProducts() {
    const res = await fetch("http://localhost:3000/api/products");

    return res.json();
}

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div>
            {products.map((product: any) => (
                <div key={product.id}>
                    <Link href={`/products/${product.id}`}>
                        {product.title}
                    </Link>
                </div>
            ))}
        </div>
    );
}
