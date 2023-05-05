import { fetch } from 'undici';

export async function createEventApplication(accessToken, application) {
  const { access_token, token_type } = accessToken;

  const url = `${process.env.API_BASE_URL}/events/${application.event_name}/application`;

  const options = {
    method: 'POST',
    headers: {
      'Authorization': `${token_type} ${access_token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ application })
  };

  try {
    const response = await fetch(url, options);
  } catch (err) {
    throw err;
  }
}

export async function readEventApplication(accessToken, event) {
  const { access_token, token_type } = accessToken;

  const url = `${process.env.API_BASE_URL}/events/${event}/application`;
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `${token_type} ${access_token}`,
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(url, options);

    if (response.ok) {
      const data = response.json();

      return data;
    }
  } catch (err) {
    throw err;
  }
}
