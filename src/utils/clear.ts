export const clearCookies = () => {
  const cookies = document.cookie.split(';');

  for (let cookie of cookies) {
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  }

  console.log('Cookies cleared!');
};

export const clearCache = async () => {
  const cacheNames = await caches.keys();
  for (const cacheName of cacheNames) {
    await caches.delete(cacheName);
  }
  console.log('Cache cleared!');
};

export const clearIndexedDB = async () => {
  const dbs = await indexedDB.databases();
  for (const db of dbs) {
    const dbName = db.name;
    if (dbName) {
      const request = indexedDB.deleteDatabase(dbName);
      request.onsuccess = () => {
        console.log(`Database ${dbName} deleted`);
      };
      request.onerror = (event) => {
        console.error(`Error deleting database ${dbName}:`, event);
      };
    }
  }
};
