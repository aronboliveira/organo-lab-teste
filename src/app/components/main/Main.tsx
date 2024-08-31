import {
  kebabToCamel,
  regularToCamel,
  regularToPascal,
} from "@/app/lib/models";
import LNumInp from "../client/inputs/body/LNumInp";
import LNumOutp from "../client/inputs/body/LNumOutp";
import Image from "next/image";
const ap = {
  n: "agr_plaster",
  t: "Gesso Agrícola",
};
const swf = {
  n: "sw_flour",
  t: "Farinha de Algas",
};
const firstInpBlockDef = [
  {
    n: "peat",
    t: "Turfa",
  },
  {
    n: "perlite",
    t: "Perlita",
  },
  {
    n: "earthworm_humus",
    t: "Húmus de Minhoca",
  },
];
const secondInpBlockDef = [
  {
    n: "basalt_rp",
    t: "Pó de Rocha Basalto",
  },
  {
    n: "neem_pie",
    t: "Perlita",
  },
  {
    n: "shell_ls",
    t: "Calcário de Conchas",
  },
  ap,
];
const secondInpBlockB = [
  ...secondInpBlockDef,
  {
    n: "bakashi",
    t: "Bakashi",
  },
  {
    n: "biochar",
    t: "Biochar",
  },
];
export default function Main(): JSX.Element {
  return (
    <main id="main">
      <div id="soilDiv">
        <LNumInp
          name="soil_quant"
          id="soilQuant"
          title="Quantidade de Solo"
          large={true}
          group="main"
        />
        <button
          className="btn btn-secondary calc-btn"
          data-group="main"
          id="btnMain"
        >
          Calcular
        </button>
      </div>
      <div id="kits-wrapper">
        {[
          {
            kn: "Coots Soil",
            sub: [
              {
                o: "first",
                inps: firstInpBlockDef,
              },
              {
                o: "second",
                inps: [...secondInpBlockDef, swf],
              },
            ],
          },
          {
            kn: "Matinho Cheiroso | Solo Vivo",
            sub: [
              { o: "first", inps: firstInpBlockDef },
              {
                o: "second",
                inps: [
                  ...secondInpBlockB,
                  swf,
                  {
                    n: "cr_flour",
                    t: "Farinha de Crustáceos",
                  },
                ],
              },
            ],
          },
          {
            kn: "GYNETCS",
            sub: [
              { o: "first", inps: firstInpBlockDef },
              {
                o: "second",
                inps: [
                  ...secondInpBlockB,
                  {
                    n: "nt_phosp",
                    t: "Fosfato Natural",
                  },
                ],
              },
            ],
          },
        ].map((s, i) => {
          const normalizedKn = regularToCamel(
            s.kn.replace(/\|/g, " ").replace(/\s{2,}/g, " ")
          );
          const pascalKn = regularToPascal(
            s.kn.replace(/\|/g, " ").replace(/\s{2,}/g, " ")
          );
          return (
            <section
              id={`sect${pascalKn}`}
              className="kit-sect"
              data-title={`Kit — ${s.kn}`}
              data-group={normalizedKn}
              key={`kit_sect__${i}`}
            >
              <h2
                className="kit-title"
                id={`title${pascalKn}`}
                data-group={normalizedKn}
              >
                Kit — {s.kn}
              </h2>
              {s.sub.map((sc, j) => (
                <div
                  className="kit-subsect coots-soil-subsect"
                  id={`div${j}${pascalKn}`}
                  key={`kit_sect__${i}__subsect__${j}`}
                  data-group={normalizedKn}
                >
                  {sc.inps.map((inp, k) => (
                    <LNumOutp
                      name={inp.n}
                      id={
                        /_/g.test(inp.n)
                          ? `${kebabToCamel(inp.n)}Sect${pascalKn}`
                          : `${inp.n}Sect${pascalKn}`
                      }
                      title={`${inp.t}__${s.kn}`}
                      iniValue={s.kn === "GYNETCS" && j === 1 ? "kg" : "l"}
                      group={normalizedKn}
                      key={`kit_sect__${i}__subsect__${j}__inp__${k}`}
                    />
                  ))}
                </div>
              ))}
              <button
                className="btn btn-secondary calc-btn"
                data-group={normalizedKn}
                id={`btn${pascalKn}`}
              >
                Calcular
              </button>
            </section>
          );
        })}
      </div>
      <div id="brand-wrapper">
        <Image
          id="soilPackage"
          alt="Pacote de Solo Vivo"
          src="/images/kit_super_solo.jpg"
          width={375}
          height={480}
        />
        <section id="brand-invite-sect">
          <h3 id="brand-invite-header">Conheça Todas as Soluções</h3>
          <div id="brand-invite-body">
            <div id="brand-invite-subtitle-wrapper">
              <Image
                id="brand-invite-logo"
                alt="Logo Pequena"
                src="/images/org_lab_logo_favicon_32.png"
                width={40}
                height={40}
              />
              <h4 id="brand-invite-subtitle">E aí, bora cultivar?</h4>
            </div>
            <button
              id="brand-invite-shop-btn"
              className="btn btn-primary"
              type="button"
            >
              <a
                id="brand-invite-shop-btn-text"
                href="https://www.organolab.com.br/"
                target="_blank"
                rel="noopener"
              >
                Conheça a Loja
              </a>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
