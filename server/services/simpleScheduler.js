import cron from 'node-cron';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import config from '../config/index.js';

import { updateResponseData } from '../data/ResponseReady/index.js'

// Import scrapers
import { getLeetcodeUserInfo } from '../utils/leetcodeScraper.js';
import { getCodeforcesUserInfo } from '../utils/codeforcesScraper.js';
import { getCodechefUserInfo } from '../utils/codechefScraper.js';
import { getGFGUserInfo } from '../utils/gfgScraper.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '../data');

// Simple update function with memory optimization
const updatePlatform = async (platform, scraper, responseDataUpdater = null) => {
  try {
    console.log(`🔄 Updating ${platform}...`);
    const data = await scraper();

    if (data) {
      const filePath = path.join(dataDir, `${platform}.json`);
      await fs.writeFile(filePath, JSON.stringify(data, null, 2));
      console.log(`✅ ${platform} updated`);

      // If we have a response data updater function, call it
      if (responseDataUpdater && typeof responseDataUpdater === 'function') {
        await responseDataUpdater();
        console.log(`✅ ${platform} response data updated`);
      }

      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ ${platform} failed:`, error.message);
    return false;
  }
};

// Update all platforms
const updateAllPlatforms = async () => {
  console.log("🚀 Starting data update...");

  const updates = [
    updatePlatform('leetcode', getLeetcodeUserInfo),
    updatePlatform('codeforces', getCodeforcesUserInfo),
    updatePlatform('codechef', getCodechefUserInfo),
    updatePlatform('gfg', getGFGUserInfo)
  ];

  const results = await Promise.all(updates);
  const successful = results.filter(r => r).length;



  console.log(`📊 Update complete: ${successful}/4 platforms updated`);
  updateResponseData();
  return { successful, total: 4 };
};

// Start scheduler
const startScheduler = () => {
  // Run every 6 hours using cron pattern (0 */6 * * *)
  cron.schedule('0 */6 * * *', async () => {
    console.log(`⏰ Scheduled update: ${new Date().toLocaleString()}`);
    try {
      await updateAllPlatforms();
      updateResponseData();
    } catch (error) {
      console.error("❌ Scheduled update failed:", error.message);
    }
  });

  console.log(`⏰ Scheduler started - updates every ${config.UPDATE_INTERVAL_HOURS} hours`);
};

export { startScheduler, updateAllPlatforms };
