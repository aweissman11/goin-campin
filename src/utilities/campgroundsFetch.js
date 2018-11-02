export const fetchCall = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    console.error(Error(response.statusText));
    return Error(response.statusText)
  }
  return await response.json();
}

export default fetchCall;