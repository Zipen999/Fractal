
export interface AuthUser {
  email: string;         // Unique ID from database (mail)
  isAuthenticated: boolean; // Simple flag to check if the session is active
  role: 'Admin' | 'Guest'; // Crucial for authorization checks
}

// Example usage:
// If a user is NOT logged in, the service might return:
// { userId: '', username: 'Guest', isAuthenticated: false, role: 'Guest' }