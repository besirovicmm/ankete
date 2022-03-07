// import e from "express";
// import React, { useState } from "react";

// const KreirajAnketu = () => {
//   const [odgovoriIpitanja, setOdgovoriIpitanja] = useState({
//     pitanje: [],
//     odgovori: [],
//   });
//   const [listaInputa, setlistaInputa] = useState([]);
//   const jos = (e) => {
//     setlistaInputa((prevState) => [...prevState, 1]);
//   };

//   const ubaciUstanje = (e) => {
//     setOdgovoriIpitanja((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   console.log(listaInputa);
//   return (
//     <div className="kreirajAnkete">
//       <h1>Kreiraj ankete</h1>
//       <label>Ime ankete</label> <input type="text" /> <br />
//       <br />
//       <label>Pitanje</label> <input type="text" />{" "}
//       <button onClick={odgovori}>odgovori</button>
//       <br></br>
//       <button onClick={jos}>jos</button>
//       <div>
//         {listaInputa &&
//           listaInputa.map((el) => {
//             return (
//               <>
//                 <label>pitanje</label>{" "}
//                 <input
//                   type="text"
//                   name="pitanje"
//                   onChange={ubaciUstanje}
//                   value={odgovoriIpitanja.pitanje}
//                 ></input>
//                 <br />
//               </>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

// export default KreirajAnketu;
