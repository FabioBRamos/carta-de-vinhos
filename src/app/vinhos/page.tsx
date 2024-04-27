import React, { Fragment } from 'react';
import { Vinho } from '../../models/vinho';

export default function VinhosIndexPage() {
  const vinhos: Vinho[] = [];

  // useEffect(() => {
  //   fetch('/vinhos')
  //     .then(res => res.json())
  //     .then(data => setVinhos(data))
  //     .catch(err => console.error(err));
  // }, []);

  return (
    <Fragment>
      <h1>Server Component</h1>
      <div>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {/* {
          vinhos.map((vinho, index) => (
            <tr key={index}>
              <td>{vinho.id.toString()}</td>
              <td>{vinho.nome}</td>
              <td>{vinho.descricao}</td>
            </tr>
          ))
        } */}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}