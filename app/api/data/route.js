export async function GET() {
  const data = {
    name: "John",
    age: 20,
    bio: "Some information",
  };
  return new Response(JSON.stringify(data));
}
