import { fetch } from 'undici';

export async function createEventApplication(accessToken, application) {
  const { access_token, token_type } = accessToken;

  const url = `${process.env.API_BASE_URL}/events/${application.event_name}/application`;

console.log(process.env);

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

console.dir(response);

  } catch (err) {
console.log(err);

    throw err;
  }
}

export async function readEventApplication(accessToken, event) {
  const { access_token, token_type } = accessToken;

console.log(accessToken);
console.log(res.locals);

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

console.dir(response);

    if (response.ok) {
      const data = response.json();

console.dir(data);

      return data;
    }
  } catch (err) {
console.log(err);

    throw err;
  }
}
