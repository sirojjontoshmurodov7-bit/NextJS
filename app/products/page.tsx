import Link from "next/link";

async function getProducts(search: string, minPrice: string, maxPrice: string) {
    const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (minPrice) params.append("minPrice", minPrice);
    if (maxPrice) params.append("maxPrice", maxPrice);

    const res = await fetch(
        `http://localhost:3000/api/products?${params.toString()}`,
        {
            cache: "no-store",
        },
    );

    return res.json();
}

export default async function ProductsPage({
    searchParams,
}: {
    searchParams: Promise<{
        search?: string;
        minPrice?: string;
        maxPrice?: string;
    }>;
}) {
    const { search = "", minPrice = "", maxPrice = "" } = await searchParams;

    const products = await getProducts(search, minPrice, maxPrice);

    return (
        <div>
            <h1>Products</h1>
            <form>
                <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    defaultValue={search}
                />
                <input
                    type="number"
                    name="minPrice"
                    placeholder="Min price"
                    defaultValue={minPrice}
                />
                <input
                    type="number"
                    name="maxPrice"
                    placeholder="Max price"
                    defaultValue={maxPrice}
                />
                <button>Filter</button>
            </form>
            <hr />
            {products.length === 0 ? (
                <h2>No products found.</h2>
            ) : (
                products.map((product: any) => (
                    <div key={product.id}>
                        <Link href={`/products/${product.id}`}>
                            <h2>{product.title}</h2>
                        </Link>
                    </div>
                ))
            )}
        </div>
    );
}
