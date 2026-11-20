import { request } from "http";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;

    const products = [
        {
            id: 1,
            title: "Redmi note 12",
            price: 300,
        },
        {
            id: 2,
            title: "Redmi note 13",
            price: 300,
        },
        {
            id: 1,
            title: "Redmi note 14",
            price: 300,
        },
    ];

    const product = products.find((p) => p.id === Number(id));

    return Response.json(product);
}
