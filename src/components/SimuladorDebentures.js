// import React, { useState } from "react";
// import styled from "styled-components";
// import { TextField, Button, Typography, Box, Card, CardContent } from "@mui/material";

// // Estilos principais
// const SimuladorContainer = styled.div`
//   font-family: "Montserrat", sans-serif;
//   background: linear-gradient(180deg, #011e3b, #343a40);
//   color: #ffffff;
//   padding: 20px;
//   border-radius: 12px;
//   box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
// `;

// const ResultadoCard = styled(Card)`
//   background: rgba(255, 255, 255, 0.1);
//   color: #ffffff;
//   margin-top: 20px;
//   padding: 15px;
//   border-radius: 12px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
//   text-align: center;

//   & h6 {
//     font-size: 18px;
//     font-weight: bold;
//     margin-bottom: 10px;
//     color: #ddba33;
//   }

//   & p {
//     font-size: 20px;
//     font-weight: bold;
//     color: #ffffff;
//   }
// `;

// const SimuladorDebentures = () => {
//   const [dataCompra, setDataCompra] = useState("2025-01-01");
//   const [dataVenda, setDataVenda] = useState("2026-01-01");
//   const [valorInvestido, setValorInvestido] = useState(100000);
//   const [taxaDebenture, setTaxaDebenture] = useState(5);
//   const [impostoRenda, setImpostoRenda] = useState(20);
//   const [taxaIPCA, setTaxaIPCA] = useState(3);
//   const [taxaTesouroIPCA, setTaxaTesouroIPCA] = useState(0);
//   const [resultado, setResultado] = useState(null);


//   const formatarFloat = (valor) => {
//     const regex = /(\d+)(?:\.(\d{2}))?/;
//     return valor.toFixed(2).toString().replace(regex, (match, parteInteira, parteDecimal) => {
//       parteDecimal = (parteDecimal || '00').padEnd(2, '0');
//       parteInteira = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
//       return `R$ ${parteInteira},${parteDecimal}`;
//     });
//   }
//   const calcularMeses = (compra, venda) => {

//     const data1 = new Date(compra);
//     const data2 = new Date(venda);

//     return (data2.getFullYear() - data1.getFullYear()) * 12 + (data2.getMonth() - data1.getMonth());
//   };

//   const calcularResgateBruto = (valorInvestido, taxaDebenture, taxaIPCA, meses) => {
//     const taxaTotal = ((taxaDebenture / 100) + 1) * ((taxaIPCA / 100) + 1);
//     return valorInvestido * Math.pow(taxaTotal, meses / 12);
//   };

//   const calcularResgateLiquido = (
//     resgateBruto,
//     impostoRenda,
//     valorInvestido
//   ) => {
//     const descontoIR = (resgateBruto - valorInvestido) * (impostoRenda / 100);
//     let valorAtual = (resgateBruto - descontoIR)
//     return valorAtual;
//   };

//   const calcularRentabilidade = (resgateLiquido, valorInvestido, meses) => {
//     const lucroLiquido = resgateLiquido - valorInvestido;
//     const rentabilidadeAA = ((resgateLiquido / valorInvestido) ** (12 / meses) - 1) * 100;
//     const rentabilidadeAM = ((resgateLiquido / valorInvestido) ** (1 / meses) - 1) * 100;
//     return { lucroLiquido, rentabilidadeAA, rentabilidadeAM };
//   };

//   const handleCalcular = () => {
//     const meses = calcularMeses(dataCompra, dataVenda);
//     if (meses <= 0) {
//       alert("A data de venda deve ser posterior à data de compra. pelo menos por um mês");
//       return;
//     }

//     const resgateBruto = calcularResgateBruto(valorInvestido, taxaDebenture, taxaIPCA, meses);
//     const resgateLiquido = calcularResgateLiquido(resgateBruto, impostoRenda, valorInvestido);
//     const { lucroLiquido, rentabilidadeAA, rentabilidadeAM } = calcularRentabilidade(resgateLiquido, valorInvestido, meses);

//     setResultado({
//       resgateBruto,
//       resgateLiquido,
//       lucroLiquido,
//       rentabilidadeAA,
//       rentabilidadeAM,
//     });
//   };

//   return (
//     <SimuladorContainer>
//       <Typography variant="h4" align="center" gutterBottom>
//         Simulador de Debêntures
//       </Typography>
//       <Box display="flex" flexDirection="column" style={{ backgroundColor: "white", padding: 9, margin: 9, gap: 10 }}>
//         <TextField
//           label="Data de Compra"
//           type="date"
//           InputLabelProps={{ shrink: true }}
//           value={dataCompra}
//           onChange={(e) => setDataCompra(e.target.value)}
//           variant="outlined"
//         />
//         <TextField
//           label="Data de Venda"
//           type="date"
//           InputLabelProps={{ shrink: true }}
//           value={dataVenda}
//           onChange={(e) => setDataVenda(e.target.value)}
//           variant="outlined"
//         />
//         <TextField
//           label="Valor Investido (R$)"
//           type="number"
//           value={valorInvestido}
//           onChange={(e) => setValorInvestido(Number(e.target.value))}
//           variant="outlined"
//         />
//         <TextField
//           label="Taxa da Debênture (%)"
//           type="number"
//           value={taxaDebenture}
//           onChange={(e) => setTaxaDebenture(Number(e.target.value))}
//           variant="outlined"
//         />
//         <TextField
//           label="Imposto de Renda (%)"
//           type="number"
//           value={impostoRenda}
//           onChange={(e) => setImpostoRenda(Number(e.target.value))}
//           variant="outlined"
//         />
//         <TextField
//           label="Taxa IPCA (%)"
//           type="number"
//           value={taxaIPCA}
//           onChange={(e) => setTaxaIPCA(Number(e.target.value))}
//           variant="outlined"
//         />
//         <TextField
//           label="Taxa Tesouro IPCA (%)"
//           type="number"
//           value={taxaTesouroIPCA}
//           onChange={(e) => setTaxaTesouroIPCA(Number(e.target.value))}
//           variant="outlined"
//         />
//       </Box>

//       <Button variant="contained" color="primary" onClick={handleCalcular}>
//         Calcular
//       </Button>

//       {resultado && (
//         <Box marginTop={4}>
//           <ResultadoCard>
//             <Typography variant="h6">Resgate Bruto:</Typography>
//             <Typography style={{ color: "black" }}>{formatarFloat(resultado.resgateBruto)}</Typography>
//           </ResultadoCard>
//           <ResultadoCard>
//             <Typography variant="h6">Resgate Líquido:</Typography>
//             <Typography style={{ color: "black" }}>{formatarFloat(resultado.resgateLiquido)}</Typography>
//           </ResultadoCard>
//           <ResultadoCard>
//             <Typography variant="h6">Lucro Líquido:</Typography>
//             <Typography style={{ color: "black" }}>{formatarFloat(resultado.lucroLiquido)}</Typography>
//           </ResultadoCard>
//           <ResultadoCard>
//             <Typography variant="h6">Rentabilidade Anual:</Typography>
//             <Typography style={{ color: "black" }}>{resultado.rentabilidadeAA.toFixed(2)}%</Typography>
//           </ResultadoCard>
//           <ResultadoCard>
//             <Typography variant="h6">Rentabilidade Mensal:</Typography>
//             <Typography style={{ color: "black" }}>{resultado.rentabilidadeAM.toFixed(2)}%</Typography>
//           </ResultadoCard>
//         </Box>
//       )}
//     </SimuladorContainer>
//   );
// };

// export default SimuladorDebentures;

