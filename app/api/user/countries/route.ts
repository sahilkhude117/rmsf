import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const response = await fetch('https://www.apicountries.com/countries');

    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }

    const data = await response.json();

    // Extract only the "name" field from each country
    const countryNames = data.map((country: any) => country.name);

    return NextResponse.json(
      {
        countryNames,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error fetching countries:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
      },
      {
        status: 500,
      }
    );
  }
};
