export async function GET(request){
    return new Response(JSON.stringify("hello users from the server"))
}