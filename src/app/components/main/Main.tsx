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
      <section id="cootsSoil" className="kit-sect">
        <div className="kit-subsect coots-soil-subsect">
          <LNumInp name="peat" id="peat" title="Turfa" iniValue="l" />
          <LNumInp name="perlite" id="perlite" title="Perlita" iniValue="l" />
          <LNumInp
            name="earthworm_humus"
            id="earthwormHumus"
            title="Húmus de Minhoca"
            iniValue="l"
          />
        </div>
        <div className="kit-subsect coots-soil-subsect">
          <LNumInp
            name="basalt_rp"
            id="basaltRp"
            title="Pó de Rocha Basalto"
            iniValue="l"
          />
          <LNumInp
            name="neem_pie"
            id="neemPie"
            title="Torta de Neem"
            iniValue="l"
          />
          <LNumInp
            name="shell_ls"
            id="shellLs"
            title="Calcário de Conchas"
            iniValue="l"
          />
          <LNumInp
            name="agr_plaster"
            id="agrPlaster"
            title="Gesso Agrícola"
            iniValue="l"
          />
          <LNumInp
            name="sw_flour"
            id="sw_flour"
            title="Farinha de Algas"
            iniValue="l"
          />
        </div>
      </section>
    </main>
  );
}
