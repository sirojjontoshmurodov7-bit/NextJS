import { products } from "./data";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const minPrice = Number(searchParams.get("minPrice")) || 0;
    const maxPrice = Number(searchParams.get("maxPrice")) || Infinity;

    const filteredProducts = await products.filter((product) => {
        const matchesTitle = product.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesPrice =
            product.price >= minPrice && product.price <= maxPrice;

        return matchesTitle && matchesPrice;
    });

    return Response.json(filteredProducts);
}

export async function POST(request: Request) {
    const body = await request.json();

    products.push(body);

    return Response.json({
        message: "Mahsulot yaratildi",
        product: body,
    });
}
