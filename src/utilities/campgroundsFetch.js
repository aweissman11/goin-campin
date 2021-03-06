export const campgroundsFetch = async (url) => {
  const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return await response.text();
}

export default campgroundsFetch;
