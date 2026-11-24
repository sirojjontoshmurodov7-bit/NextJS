import { request } from "http";
import { products } from "../data";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;

    const product = products.find((p) => p.id === Number(id));

    return Response.json(product);
}

export async function PATCH(
    request: Request,
    {
        params,
    }: {
        params: Promise<{ id: string }>;
    },
) {
    const { id } = await params;
    const body = await request.json();
    const product = products.find((product) => product.id === Number(id));
    if (!product) {
        return Response.json({
            message: "Mahsulot topilmadi",
        });
    }
    product.title = body.title;
    product.price = body.price;
    return Response.json({
        message: "Mahsulot yangilandi",
        product,
    });
}

export async function DELETE(
    request: Request,
    {
        params,
    }: {
        params: Promise<{ id: string }>;
    },
) {
    const { id } = await params;
    const index = products.findIndex((product) => product.id === Number(id));
    if (index === -1) {
        return Response.json({
            message: "Mahsulot topilmadi",
        });
    }
    products.splice(index, 1);
    return Response.json({
        message: "Mahsulot yo'q qilindi",
    });
}
