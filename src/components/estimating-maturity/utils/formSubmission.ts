
/**
 * Utility functions for submitting assessment data to Formspree
 */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjkyoezb';

export async function submitAssessmentData(data: Record<string, any>) {
  try {
    console.log('Submitting data to Formspree:', data);
    
    // Add timestamp and user agent for analytics
    const enhancedData = {
      ...data,
      submittedAt: new Date().toISOString(),
      userAgent: navigator.userAgent,
      source: window.location.href,
      referrer: document.referrer
    };
    
    // Sanitize data before sending
    // Avoid circular references and remove any undefined/null values
    const safeData = JSON.parse(JSON.stringify(enhancedData));
    
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(safeData)
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Form submission error:', errorText);
      throw new Error(`Form submission failed: ${response.status} ${response.statusText}`);
    }
    
    const result = await response.json();
    console.log('Form submission successful:', result);
    return { success: true, result };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, error };
  }
}

// Submit when user provides additional context or confidence info
export async function submitAdditionalInfo(questionId: string, data: Record<string, any>) {
  return submitAssessmentData({
    formType: 'additionalInfo',
    questionId,
    ...data,
    timestamp: new Date().toISOString()
  });
}

// Submit each question response as it changes
export async function submitQuestionResponse(questionData: Record<string, any>) {
  return submitAssessmentData({
    formType: 'questionResponse',
    ...questionData,
    timestamp: new Date().toISOString()
  });
}

// Track section navigation
export async function trackSectionNavigation(sectionId: string, action: 'view' | 'complete') {
  return submitAssessmentData({
    formType: 'sectionNavigation',
    sectionId,
    action,
    timestamp: new Date().toISOString()
  });
}

// Track user engagement metrics
export async function trackEngagement(metricType: string, data: Record<string, any>) {
  return submitAssessmentData({
    formType: 'engagement',
    metricType,
    ...data,
    timestamp: new Date().toISOString()
  });
}
