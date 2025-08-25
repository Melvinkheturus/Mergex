import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

// Map of document types to their corresponding paths
const documentTypePaths: Record<string, string> = {
  home: '/',
  service: '/services',
  feature: '/',  // Features appear on home page
  testimonial: '/', // Testimonials appear on home page
  caseStudy: '/portfolio',
  // Add more document types and their paths as needed
};

export async function POST(request: NextRequest) {
  try {
    // Get the request body for webhook payload
    const body = await request.json();
    let secret = body.secret;
    const { _type, slug, _id } = body;
    
    // For backward compatibility, also check query params
    if (!secret) {
      const { searchParams } = new URL(request.url);
      secret = searchParams.get('secret');
    }

    // Check if the secret is valid
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }
    
    // Default path to revalidate if no specific path is determined
    let pathToRevalidate = body.path || '/';
    
    // If document type is provided, use the mapping to determine the path
    if (_type && documentTypePaths[_type]) {
      pathToRevalidate = documentTypePaths[_type];
      
      // If it's a document with a slug, append it to the path
      if (slug?.current && _type !== 'home') {
        pathToRevalidate = `${pathToRevalidate}/${slug.current}`;
      }
    }
    
    // Revalidate the specific path
    revalidatePath(pathToRevalidate);
    
    // Also revalidate by document type tag for any cached data using this document type
    if (_type) {
      revalidateTag(_type);
    }
    
    // If we have a document ID, revalidate by ID tag as well
    if (_id) {
      revalidateTag(`sanity-${_id}`);
    }

    return NextResponse.json({ 
      revalidated: true, 
      path: pathToRevalidate,
      documentType: _type || null,
      documentId: _id || null,
      now: Date.now() 
    });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating', error: err }, { status: 500 });
  }
}