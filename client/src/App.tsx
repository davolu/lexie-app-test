import React from 'react';
import { useQuery, gql } from "@apollo/client";
const COORD_QUERY = gql`
{
  getCoords(limit:"5", bbox:"10,11,12,12")
}
`;
const App = ()=> {
const { data, loading, error } = useQuery(COORD_QUERY);
  return (
    <div className="App">
      {!loading && data.getCoords}     
    </div>
  );
}
export default App;
