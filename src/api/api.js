
export const api = {
  register: async (username, email, password) => {
    const res = await fetch('https://api.kitek-pg.ru/api/marketplace/api/auth/register'
, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });
    return res.json();
  },
  login: async (username, password) => {
    const res = await fetch('https://api.kitek-pg.ru/api/marketplace/api/auth/login'
, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    return res.json();
  },
  getMe: async () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const res = await fetch('https://api.kitek-pg.ru/api/marketplace/api/auth/me'
, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return res.json();
  },
};