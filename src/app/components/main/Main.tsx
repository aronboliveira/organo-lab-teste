import LNumInp from "../client/inputs/body/LNumInp";

export default function Main(): JSX.Element {
  return (
    <main id="main">
      <LNumInp
        name="soil_quant"
        id="soilQuant"
        title="Quantidade de Solo"
        large={true}
      />
    </main>
  );
}
