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

Abre em `http://localhost:4321/revisor-notas` (o `base` é `/revisor-notas`).

## Build

```bash
npm run build
npm run preview
```

## Deploy

Destino pretendido: `https://mcp.iamed.cc/revisor-notas`. O deploy na Vercel e o
domínio são configurados manualmente.

## Notas

- O repositório do projeto `revisor-notas-mcp` existe, mas é privado. Os links de
  GitHub vão falhar para visitantes sem acesso até ele ser tornado público.
- O exemplo de retorno na página é a saída real de uma nota sintética de teste do
  repositório. Nenhum dado real de paciente aparece na página.
- Não é apoio à decisão clínica nem dispositivo médico.

## Licença

Apache-2.0 (mesma do projeto).
