import { isPexelsEnabled } from "../lib/pexels/config";
import { warmPexelsCache } from "../lib/pexels/resolve";

async function main() {
  if (!isPexelsEnabled()) {
    console.error(
      "Pexels is disabled. Add PEXELS_API_KEY to .env.local (and avoid USE_PEXELS=false).",
    );
    process.exit(1);
  }

  const summary = await warmPexelsCache();
  console.log(
    `Warmed ${summary.resolved}/${summary.total} placeholder slots into .pexels-cache.json`,
  );

  const failures = summary.results.filter((entry) => !entry.resolved);
  if (failures.length) {
    console.log("\nUnresolved slots:");
    for (const entry of failures) {
      console.log(`- ${entry.id}: ${entry.error ?? "no results"}`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
