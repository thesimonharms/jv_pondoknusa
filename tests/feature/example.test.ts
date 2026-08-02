import { describe, it } from 'vitest';
import { Application } from '@pondoknusa/core';
import { TestCase, withPondoknusaTest } from '@pondoknusa/testing';
import '../src/routes/web.js';

class ExampleTest extends TestCase {
  protected createApplication() {
    return new Application(import.meta.dir + '/..');
  }
}

const t = withPondoknusaTest(ExampleTest);

describe('feature / example', () => {
  it('responds on the home route', async () => {
    const response = await t.http.get('http://localhost/');
    await response.assertOk();
  });
});
