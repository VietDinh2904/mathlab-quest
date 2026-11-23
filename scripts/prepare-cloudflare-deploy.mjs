import { readFile, writeFile } from 'node:fs/promises';
const path = new URL('../dist/server/wrangler.json', import.meta.url);
const config = JSON.parse(await readFile(path, 'utf8'));
config.name = 'math-quest-lab';
config.topLevelName = 'math-quest-lab';
config.d1_databases = [{ binding:'DB', database_name:'learning-project-admin', database_id:'b87e5b33-9156-4f88-a2b3-0eb852c70117' }];
config.observability = { enabled:true };
await writeFile(path, `${JSON.stringify(config, null, 2)}\n`);
console.log('Prepared dist/server/wrangler.json for direct Cloudflare deployment.');
