import { cloudinary } from '@/lib/cloudinary';

export async function POST(request: Request) {
    // Parse the request body
    const body = (await request.json()) as {paramsToSign: Record<string, string>}
    const {paramsToSign} = body;

    // Sign the request
    const signature = cloudinary.v2.utils.api_sign_request(paramsToSign, 
        process.env.CLOUDINARY_API_SECRET as string);

    return Response.json({signature});
}