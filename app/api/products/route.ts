export async function GET() {
    return Response.json([
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
    ]);
}
