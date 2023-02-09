export const getBreed = (val) => {
  const url = new URL(val);
  const breed = url.pathname.split("/")[2];
  if (breed.split("-").length > 1) {
    return breed
      .split("-")
      .reverse()
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return breed;
};

export const getDog = (val) => {
  const url = new URL(val);
  const dog = url.pathname.split("/")[3];
  return dog;
};

export const getRoute = (val) => {
  const url = new URL(val);
  const breed = url.pathname.split("/")[2];
  // get dog name from url without extension
  const dog = url.pathname.split("/")[3].split(".")[0];
  return `/${breed}/${dog}`;
};
