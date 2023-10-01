// src/api/api.ts
import axios from 'axios';
import { API_BASE_URL } from './apiConfig';
import { ApplicationForm } from './types';

// Function to fetch the application form data
export async function getApplicationForm(version: string, programId: string): Promise<ApplicationForm> {
  const url = `${API_BASE_URL}/api/${version}/programs/${programId}/application-form`;
  try {
    console.log(`Fetching application form from URL: ${url}`);
    const response = await axios.get<ApplicationForm>(url);
    console.log('Application form data retrieved successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching application form:', error);
    throw error;
  }
}

// Function to update the application form data
export async function updateApplicationForm(version: string, programId: string, data: ApplicationForm): Promise<void> {
  const url = `${API_BASE_URL}/api/${version}/programs/${programId}/application-form`;
  try {
    console.log(`Updating application form data at URL: ${url}`);
    await axios.put(url, data);
    console.log('Application form data updated successfully');
  } catch (error) {
    console.error('Error updating application form data:', error);
    throw error;
  }
}
