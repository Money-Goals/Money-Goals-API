const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const UserService = require('../lib/services/UserService.js');

const mockUser = {
  email: 'test@example.com',
  password: '12345',
};

describe('accounts routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  afterAll(() => {
    pool.end();
  });
  const registerAndLogin = async (userProps = {}) => {
    const password = userProps.password ?? mockUser.password;

    // Create an "agent" that gives us the ability
    // to store cookies between requests in a test
    const agent = request.agent(app);

    // Create a user to sign in with
    const user = await UserService.create({ ...mockUser, ...userProps });

    // ...then sign in
    const { email } = user;
    await agent.post('/api/v1/users/sessions').send({ email, password });
    return [agent, user];
  };

  it('/POST to accounts table', async () => {
    const [agent] = await registerAndLogin();
    const accountRes = await agent.post('/api/v1/accounts').send({
      monthlyIncome: '5000',
      housing: '200',
      transportation: '200',
      groceries: '200',
      insurance: '200',
      healthcare: '200',
      utilities: '200',
      miscellaneous: '200',
      savings: '200',
    });
    expect(accountRes.status).toEqual(200);
  });
});