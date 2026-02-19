import { PartnerApplication, ReferralSubmission } from '../types';

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_PARTNER_API_URL || 'https://script.google.com/macros/s/AKfycbwHDjgGzSjIhN0pb0QynXSKzCXbST96cg0rCfud_oIlUpo-oxY6iMEMmEJo5ZdbfUjJIg/exec';

interface ApiResponse {
    success: boolean;
    note?: string;
}

interface ApiPayload {
    table: 'partner' | 'referral';
    data: Record<string, string>;
}

export async function submitPartnerApplication(data: PartnerApplication): Promise<ApiResponse> {
    const payload: ApiPayload = {
        table: 'partner',
        data: {
            'Name': data.name,
            'Email': data.email,
            'Company': data.company,
            'Partnership Type': data.partnershipType === 'strategic' ? 'Strategic' : 'Referral',
            'Message': data.message,
        }
    };

    return submitToGoogleSheet(payload);
}

export async function submitReferral(data: ReferralSubmission): Promise<ApiResponse> {
    const payload: ApiPayload = {
        table: 'referral',
        data: {
            'Referrer Name': data.referrerName,
            'Referrer Email': data.referrerEmail,
            'Client Name': data.clientName,
            'Client Company': data.clientCompany,
            'Problem Description': data.problemDescription,
        }
    };

    return submitToGoogleSheet(payload);
}

async function submitToGoogleSheet(payload: ApiPayload): Promise<ApiResponse> {
    if (!GOOGLE_SCRIPT_URL) {
        console.error('Partner API URL is not configured');
        throw new Error('API configuration error: Partner API URL is missing.');
    }

    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            credentials: 'omit', // CRITICAL: Prevents CORS errors caused by Google auth redirects
            headers: {
                // We use text/plain to avoid a preflight OPTIONS request (Simple Request)
                'Content-Type': 'text/plain;charset=utf-8',
                'Accept': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Submission error:', error);
        throw error;
    }
}
