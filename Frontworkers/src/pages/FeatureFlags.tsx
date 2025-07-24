import { useEffect, useState } from 'react';

type FeatureFlagsResponse = {
  success: boolean;
  message: string;
  data: {
    username: string;
    role: string;
    feature_flags: {
      navbar: string[];
      sections: string[];
      permissions: Record<string, boolean>;
    };
  };
};

const FeatureFlags = () => {
  const [data, setData] = useState<FeatureFlagsResponse | null>(null);
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [login, setLogin] = useState({ username: '', password: '', role: '' });
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    if (!token) return;
    setData(null);
    setError('');
    fetch('http://127.0.0.1:8000/user/featureflags', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(setData)
      .catch(() => setError('Failed to fetch feature flags'));
  }, [token]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setError('');
    setData(null);
    try {
      const res = await fetch('http://127.0.0.1:8000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login),
      });
      const result = await res.json();
      if (res.ok && (result.access_token || (result.data && result.data.access_token))) {
        setToken(result.access_token || result.data.access_token);
      } else {
        setLoginError(result.detail || result.message || 'Login failed');
      }
    } catch {
      setLoginError('Login request failed');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Feature Flags</h2>
      <form onSubmit={handleLogin} className="mb-4">
        <div className="mb-2">
          <input
            type="text"
            className="border p-2 w-full"
            placeholder="Username"
            value={login.username}
            onChange={e => setLogin({ ...login, username: e.target.value })}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            className="border p-2 w-full"
            placeholder="Password"
            value={login.password}
            onChange={e => setLogin({ ...login, password: e.target.value })}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="border p-2 w-full"
            placeholder="Role (e.g. admin, user)"
            value={login.role}
            onChange={e => setLogin({ ...login, role: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login &amp; Fetch Feature Flags</button>
      </form>
      {loginError && <div className="text-red-500 mb-2">{loginError}</div>}
      {token && (
        <div className="mb-4">
          <strong>JWT Token:</strong>
          <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">{token}</pre>
        </div>
      )}
      {error && <div className="text-red-500 mb-2">{error}</div>}
      {data ? (
        <div>
          <div className="mb-2"><strong>User:</strong> {data.data.username}</div>
          <div className="mb-2"><strong>Role:</strong> {data.data.role}</div>
          <div className="mb-2"><strong>Navbar:</strong></div>
          <ul className="mb-2 list-disc list-inside">
            {data.data.feature_flags.navbar.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mb-2"><strong>Sections:</strong></div>
          <ul className="mb-2 list-disc list-inside">
            {data.data.feature_flags.sections.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mb-2"><strong>Permissions:</strong></div>
          <ul className="mb-2 list-disc list-inside">
            {Object.entries(data.data.feature_flags.permissions).map(([key, value]) => (
              <li key={key}><strong>{key}:</strong> {value ? 'Yes' : 'No'}</li>
            ))}
          </ul>
          <div className="mb-2"><strong>Raw Response:</strong></div>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <div className="text-gray-500">Login above to view feature flags.</div>
      )}
    </div>
  );
};

export default FeatureFlags;
