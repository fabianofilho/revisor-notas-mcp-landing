# revisor-notas-mcp-landing

Landing page do
[`revisor-notas-mcp`](https://github.com/fabianofilho/revisor-notas-mcp), um
servidor MCP que confere notas clínicas no formato SOAP (regras determinísticas
mais checagem semântica por LLM local), rodando inteiramente na máquina do
usuário. Um projeto [IA.med](https://iamed.cc), da mesma família do `anvisa-mcp`,
`radar-cfm-mcp`, `protocolos-pcdt-mcp`, `raciocinio-br-mcp` e `radar-papers-mcp`.

Página estática, sem backend e sem coleta de dados de visitante.

## Stack

- [Astro](https://astro.build) (saída estática)
- [Tailwind CSS](https://tailwindcss.com) via `@astrojs/tailwind`
- Realce de código com Shiki (build-time); JavaScript mínimo (só o botão de copiar)

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321/mcps/revisor-notas` (o `base` é `/mcps/revisor-notas`).

## Build

```bash
npm run build
npm run preview
```

## Deploy

Publicada em `https://iamed.cc/mcps/revisor-notas`. Este repositório não tem deploy
próprio: o `dist/` gerado por `npm run build` (com `base` `/mcps/revisor-notas`) é
copiado para `mcps/revisor-notas/` do repositório do site
[`Medicina-IA/medicina-ia.github.io`](https://github.com/Medicina-IA/medicina-ia.github.io),
e o push na `main` de lá dispara o deploy na Vercel (projeto `medicina-ia.github.io`,
domínio `iamed.cc`). Mudança aqui só vai ao ar depois dessa cópia.

O projeto é só de instalação local (stdio). Não há serviço hospedado.

## Notas

- O repositório do projeto `revisor-notas-mcp` é público, então os links de GitHub funcionam.
- Os exemplos de retorno na página são saídas reais da v0.1.0: a nota de dor torácica é
  sintética e rodou contra um LLM local (Qwen3.5 9B); o exemplo de seção ausente usa a
  fixture `NOTA_SEM_OBJETIVO` do repositório, sem LLM. Nenhum dado real de paciente
  aparece na página.
- Não é apoio à decisão clínica nem dispositivo médico.

## Licença

Apache-2.0 (mesma do projeto).
