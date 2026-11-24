import { products } from "./data";

export async function GET() {
    return Response.json(products);
}

export async function POST(request: Request) {
    const body = await request.json();

    products.push(body);

    return Response.json({
        message: "Mahsulot yaratildi",
        product: body,
    });
}
