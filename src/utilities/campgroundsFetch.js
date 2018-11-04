export const campgroundsFetch = async (url) => {
  console.log('cgrounds fetch');
  
  const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
  if (!response.ok) {
    console.error(Error(response.statusText));
    return Error(response.statusText)
  }
  return await response.text();
}

export default campgroundsFetch;
