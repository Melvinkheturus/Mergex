import { NextResponse } from 'next/server';
import { writeClient } from '@/sanity/lib/sanityWriteServer';

/**
 * Handles form submissions for both Partner and Referral forms.
 * Stores data in Sanity if SANITY_WRITE_TOKEN is present.
 */
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { formId, data } = body;

        if (!formId || !data) {
            return NextResponse.json({ success: false, message: 'Missing formId or data' }, { status: 400 });
        }

        // Check if we have a write token
        const hasToken = !!process.env.SANITY_WRITE_TOKEN;

        if (!hasToken) {
            console.warn(`⚠️ [Mergex API] No SANITY_WRITE_TOKEN found. Mocking success for ${formId}.`);
            console.log('Submitted Data:', data);
            return NextResponse.json({
                success: true,
                message: 'Form submitted successfully (Mock Mode). Add SANITY_WRITE_TOKEN to save to CMS.'
            });
        }

        // Determine which schema to target
        const type = formId.includes('partner') ? 'partner' : 'referral';

        // Prepare document
        const doc = {
            _type: type,
            name: data.name || data.referrerName || 'Dynamic Submission',
            email: data.email || data.referrerEmail || '',
            company: data.company || data.clientBusiness || '',
            partnershipType: data.partnershipType || (formId === 'partner-apply' ? 'strategic' : undefined),
            message: data.message || '',
            // Store all dynamic data as a JSON string in the dynamicData field
            dynamicData: JSON.stringify(data),
            submittedAt: new Date().toISOString(),
            status: 'new',
        };

        const result = await writeClient.create(doc);
        console.log(`✅ [Mergex CMS] Document created: ${result._id}`);

        return NextResponse.json({ success: true, message: 'Submission successfully saved to Sanity.' });

    } catch (error: any) {
        console.error('🚨 [Mergex API] Submission Error:', error);
        return NextResponse.json({
            success: false,
            message: error.message || 'An unexpected error occurred.'
        }, { status: 500 });
    }
}
