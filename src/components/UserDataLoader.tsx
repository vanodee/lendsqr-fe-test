// This file contains the loader functions used by react router,
// to render pages using data fetched from the Mock APIs.

interface PersonalInformation {
  full_name: string;
  phone_number: string;
  email_address: string;
  marital_status: string;
  children: string;
  type_of_residence: string;
  gender: string;
  bvn: string;
}
  
interface EducationAndEmployment {
  level_of_education: string;
  employment_status: string;
  sector_of_employment: string;
  duration_of_employment: string;
  office_email: string;
  monthly_income: string;
  loan_repayment: string;
}
  
interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}
  
interface Guarantor {
  full_name: string;
  phone_number: string;
  email_address: string;
  relationship: string;
}

// Export the UserData interface for use in other components
export interface UserData {
  id: number;
  organization: string;
  username: string;
  date_joined: string;
  status: string;
  personal_information: PersonalInformation;
  education_and_employment: EducationAndEmployment;
  socials: Socials;
  guarantor: Guarantor[];
}
  
  
// LOADER FUNCTION FOR ALL USER DATA
export const user_data_loader = async (): Promise<UserData[]> => {
  const res = await fetch(`https://run.mocky.io/v3/e01187f6-b107-401e-a80f-63504b927880`);
  if (!res.ok) {
    throw new Error(`Failed to fetch user data: ${res.statusText}`);
  }
  return res.json();
};


// LOADER FUNCTION FOR A SINGLE USER'S DATA
export const single_user_data_loader = async (): Promise<UserData[]> => {
  const res = await fetch(``);
  if (!res.ok) {
    throw new Error(`Failed to fetch user data: ${res.statusText}`);
  }
  return res.json();
};