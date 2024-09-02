import {
  kebabToCamel,
  regularToCamel,
  regularToPascal,
} from "../../../app/lib/models";
import LNumOutp from "../client/inputs/body/LNumOutp";
import Image from "next/image";
import SoilDiv from "./SoilDiv";
import { calcKits } from "../../../app/lib/handlers";
import { kitGroups } from "../../../app/declarations/types";
import CalcBtn from "../client/buttons/CalcBtn";
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
    t: "Torta de Neem",
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
    n: "bokashi",
    t: "Bokashi",
  },
  {
    n: "biochar",
    t: "Biochar",
  },
];
export default function Main(): JSX.Element {
  return (
    <main id="main">
      <img
        id="soilSacs"
        alt="Sacos de Solo"
        src="/images/sacos_solo_redc.png"
        width={527}
        height={197}
      />
      <h1 id="calc-title">Calculadora de Solo</h1>
      <div id="invite-logo-wrapper">
        <img
          id="invite-logo-img"
          alt="Logo para Anúncio"
          src="/images/org_lab_logo_favicon_96.png"
          width={86}
          height={84}
        />
        <strong id="invite-logo-title">E aí, bora cultivar?</strong>
      </div>
      <SoilDiv />
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
          let normalizedKn = regularToCamel(
            s.kn.replace(/\|/g, " ").replace(/\s{2,}/g, " ")
          );
          const pascalKn = regularToPascal(
            s.kn.replace(/\|/g, " ").replace(/\s{2,}/g, " ")
          );
          if (/[A-Z]/g.test(normalizedKn)) {
            normalizedKn = /[A-Z]/g.test(normalizedKn.charAt(0))
              ? normalizedKn.slice(
                  0,
                  /[A-Z\_\-]/g.exec(normalizedKn.slice(1))!.index
                )
              : normalizedKn.slice(
                  0,
                  /[A-Z\_\-]/g.exec(normalizedKn.slice(0))!.index
                );
          }
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
              <CalcBtn id={pascalKn} group={normalizedKn} />
            </section>
          );
        })}
      </div>
    </main>
  );
}
