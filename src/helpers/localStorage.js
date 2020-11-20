export function store(key, data, storage = window.localStorage) {
  if (!window.localStorage || !key) {
    return;
  }
  storage.setItem(key, JSON.stringify(data));
}

export function read(key, storage = window.localStorage) {
  if (!storage || !key) {
    return;
  }
  const item = storage.getItem(key);
  if (!item) {
    return;
  }

  const parse = JSON.parse;
  try {
    return parse(item);
  } catch (error) {
    return parse(`"${item}"`);
  }
}

export function remove(key, storage = window.localStorage) {
  if (!storage || !key) {
    return;
  }

  storage.removeItem(key);
}
