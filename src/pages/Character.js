import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
  const id = getHash();
  const Character = await getData(id);
  console.log(Character);
  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${Character.image}" alt="name">
        <h2>${Character.name}</h2>
      </article>
      <article class="Characters-card">
        <h3>Episodes: ${Character.episode.length}</h3>
        <h3>Status: ${Character.status}</h3>
        <h3>Species: ${Character.species}</h3>
        <h3>Gender: ${Character.gender}</h3>
        <h3>Origin: ${Character.origin.name}</h3>
        <h3>Last Location: ${Character.location.name}</h3>
      </article>
    </div>
  `;
  return view;
};

export default Character;