/**
 * @deprecated Use @/sanity/lib/queries instead
 * This file re-exports from queries.ts for backward compatibility
 */

<<<<<<< fix/partner
    // Graceful degradation when CMS data is missing (100% Uptime Guaranteed)
    console.log(`⚠️ [Mergex CMS] Using fallback content for: ${label}`);
    return fallbackData;
});

/**
 * Fetches the dynamic form configuration from Sanity.
 * This is the CORE of the Plug & Play system.
 */
export const getFormConfig = cache(async (formId: string) => {
    const query = `*[_type == "formConfig" && formId.current == $formId][0]{
        title,
        description,
        fields[]{
            label,
            fieldName,
            fieldType,
            required,
            placeholder,
            options
        },
        submitButtonText,
        successMessage
    }`;

    try {
        const { data } = await sanityFetch({
            query,
            params: { formId }
        }) as { data: any };

        return data;
    } catch (error) {
        console.error(`🚨 [Mergex CMS] Error fetching form config for ${formId}:`, error);
        return null;
    }
});
=======
export { fetchWithFallback } from './queries';
>>>>>>> preview
