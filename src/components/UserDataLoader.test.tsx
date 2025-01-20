import { describe, it, expect, vi } from 'vitest';
import { user_data_loader, single_user_data_loader } from './UserDataLoader';

describe('User Data Loader Tests', () => {
  
  // Positive Test: Fetch all users data
  it('should fetch and return all user data', async () => {
    const mockData = [{ id: 1, username: 'test_user' }];
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      } as Response)
    );

    const data = await user_data_loader();
    expect(data).toEqual(mockData);
  });

  // Positive Test: Fetch a single user by customer number
  it('should fetch and return a single user by customer number', async () => {
    const mockData = [
      { customer_number: '12345', username: 'user1' },
      { customer_number: '67890', username: 'user2' },
    ];

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      } as Response)
    );

    const params = { customer_number: '12345' };
    const user = await single_user_data_loader({ params });

    expect(user).toEqual(mockData[0]);
  });

  // Negative Test: Fetch failure (Network Error)
  it('should throw an error if the fetch fails', async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error('Network error')));

    await expect(user_data_loader()).rejects.toThrow('Network error');
  });

  // Negative Test: Fetch failure (Unsuccessful Response)
  it('should throw an error if the response is not ok', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Internal Server Error',
      } as Response)
    );

    await expect(user_data_loader()).rejects.toThrow('Failed to fetch user data: Internal Server Error');
  });

});
