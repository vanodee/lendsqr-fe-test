// This file contains the loader functions used by react router,
// to render pages using data fetched from the Mock APIs.

export interface UserData {
  id: number;
  organization: string;
  username: string;
  date_joined: string;
  tier: number;
  customer_number: string;
  status: string;
  bank_details: {
    bank_name: string;
    account_number: string;
    account_balance: number;
  };
  personal_information: {
    full_name: string;
    phone_number: string;
    email_address: string;
    marital_status: string;
    children: string;
    type_of_residence: string;
    gender: string;
    bvn: string;
  };
  education_and_employment: {
    level_of_education: string;
    employment_status: string;
    sector_of_employment: string;
    duration_of_employment: number;
    office_email: string;
    monthly_income: string;
    loan_repayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    full_name: string;
    phone_number: string;
    email_address: string;
    relationship: string;
  }[];
}
  
  
// LOADER FUNCTION FOR ALL USER DATA
export const user_data_loader = async (): Promise<UserData[]> => {
  const res = await fetch(`https://run.mocky.io/v3/b023f87e-ea0e-4581-bc83-a5d9ba00de31`);
  if (!res.ok) {
    throw new Error(`Failed to fetch user data: ${res.statusText}`);
  }
  return res.json();
};


// LOADER FUNCTION FOR A SINGLE USER'S DATA
export const single_user_data_loader = async ({ params }: { params: any }): Promise<UserData | undefined> => {
  try {
    const res = await fetch(`https://run.mocky.io/v3/b023f87e-ea0e-4581-bc83-a5d9ba00de31`);
    if (!res.ok) {
      throw new Error(`Failed to fetch user data: ${res.statusText}`);
    }

    const data: UserData[] = await res.json();  

    // Find a specific user by their customer number
    const user = data.find((u) => u.customer_number === params.customer_number);

    if (!user) {
      throw new Error("User not found.");
    }
    
    return user;

  } catch (error) {
    console.error("Error in loader:", error);
    throw new Error("An error occurred while fetching user data.");
  }
};