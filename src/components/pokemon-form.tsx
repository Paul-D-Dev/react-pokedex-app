import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import formatType from '../helpers/format-type';
import { useHistory } from 'react-router-dom'
  
type Props = {
  pokemon: Pokemon
};

// Modélise un champs dans notre formulaire
type Field = {
  value?: any,
  error?: string,
  isValid?: boolean
}

type Form = {
  name: Field,
  hp: Field,
  cp: Field,
  types: Field
}
  
const PokemonForm: FunctionComponent<Props> = ({pokemon}) => {

  // Charge notre state avec les infos du pokemon sélectionné
  const [form, setForm] = useState<Form>({
    name: {value : pokemon.name, isValid: true},
    hp: {value : pokemon.hp, isValid: true},
    cp: {value : pokemon.cp, isValid: true},
    types: {value : pokemon.types, isValid: true}
  })
  
  const types: string[] = [
    'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
    'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
  ];

  // Methode qui renvoie un boolean si le type passé en paramètres fait partie du tableau types (include)
  const hasType = (type: string): boolean => form.types.value.includes(type);
   
  // Method qui va détecte si il y une modification du champs name avec une nouvelle valeur
  // newField enregistre cette nouvelle valeur 
  // on pass la nouvelle du formation avec le newField. Le spread opérateur va s'occuper de fusionner les infos
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = {[fieldName]: {value: fieldValue}};

    setForm({...form, ...newField})
  }


  const selectType = (type: string, e: React.ChangeEvent<HTMLInputElement>): void => {
    const checked = e.target.checked;
    let newField: Field;

    if(checked) {
      // Si l'utilisateur coche un type, à l'ajoute à la liste des types du pokémon.
      // concat fusionne le tableau de type existant avec le nouveau type fraichement checked
      const newTypes: string[] = form.types.value.concat([type]);
      newField = { value: newTypes };
    } else {
      // Si l'utilisateur décoche un type, on le retire de la liste des types du pokémon.
      const newTypes: string[] = form.types.value.filter((currentType: string) => currentType !== type);
      newField = { value: newTypes };
    }

    setForm({...form, ...{ types: newField }});
  }

  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    history.push(`/pokemons/${pokemon.id}`)
  }


  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable"> 
            <div className="card-image">
              <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                {/* Pokemon name */}
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input id="name" type="text" name="name" className="form-control" value={form.name.value} onChange={e => handleInputChange(e)}></input>
                </div>
                {/* Pokemon hp */}
                <div className="form-group">
                  <label htmlFor="hp">Point de vie</label>
                  <input id="hp" type="number" name="hp" className="form-control" value={form.hp.value} onChange={e => handleInputChange(e)}></input>
                </div>
                {/* Pokemon cp */}
                <div className="form-group">
                  <label htmlFor="cp">Dégâts</label>
                  <input id="cp" type="number" name="cp" className="form-control" value={form.cp.value} onChange={e => handleInputChange(e)}></input>
                </div>
                {/* Pokemon types */}
                <div className="form-group">
                  <label>Types</label>
                  {types.map(type => (
                    <div key={type} style={{marginBottom: '10px'}}>
                      <label>
                        <input id={type} type="checkbox" className="filled-in" value={type} checked={hasType(type)} onChange={e => selectType(type, e)}></input>
                        <span>
                          <p className={formatType(type)}>{ type }</p>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn">Valider</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
   
export default PokemonForm;