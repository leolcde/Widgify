export async function register(email: string, username: string, name: string, password: string)
{
  const response = await fetch('http://localhost:5000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, username, name, password })
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Register failed')
  }

  return await response.json()
}
