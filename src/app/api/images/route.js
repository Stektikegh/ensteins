import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUD_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUD_API_SECRET,
});

export async function GET() {
  try {
    const result = await cloudinary.api.resources({ type: 'upload', max_results: 100 });
    return NextResponse.json(result.resources);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
