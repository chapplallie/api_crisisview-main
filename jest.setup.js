// Save the original NODE_ENV
const originalNodeEnv = process.env.NODE_ENV;

// Restore NODE_ENV after all tests
afterAll(() => {
  if (originalNodeEnv !== undefined) {
    process.env.NODE_ENV = originalNodeEnv;
  } else {
    delete process.env.NODE_ENV;
  }
});
