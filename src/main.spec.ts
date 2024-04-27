import { MikroORM } from '@mikro-orm/sqlite';
import { describe, test, beforeAll, expect } from 'vitest';

describe('MikroORM init', () => {
  beforeAll(async () => {
    const orm = await MikroORM.init();
  });

  test('should work', () => {
    expect(true).toBe(true);
  });
});
