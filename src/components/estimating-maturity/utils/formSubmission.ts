
/**
 * Utility functions for submitting assessment data to Formspree
 */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjkyoezb';

export async function submitAssessmentData(data: Record<string, any>) {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('Form submission failed');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, error };
  }
}
