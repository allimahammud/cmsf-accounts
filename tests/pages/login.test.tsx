import { render, screen } from '@testing-library/react';
import LoginPage from '@/app/login/page';
import userEvent from '@testing-library/user-event';
import LoginForm from '@/app/ui/login-form';
describe('some text', () => {
    it('my test', () => {
        expect('ali');
    })
});

describe('some text2', () => {
    it('my test2', () => {
        expect('ali2');
    })
});


const Hello = () => <h1>Hello World</h1>;

test('renders Hello component', () => {
  render(<Hello />);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});

//////////unit test/////////
//import { render, screen } from '@testing-library/react';


jest.mock('next/navigation', () => ({
  useRouter: () => ({ refresh: jest.fn() }),
}));

jest.mock('next-auth/react', () => ({
  useSession: () => ({ update: jest.fn() }),
}));

jest.mock('@/app/ui/acme-logo', () => () => <div>AcmeLogo</div>);
//jest.mock('@/app/ui/acme-logo', () => () => React.createElement('div', null, 'AcmeLogo'));

jest.mock('@/app/ui/toast', () => ({
  toast: jest.fn(),
}));
jest.mock('@/app/lib/actions', () => ({
  login: jest.fn(),
}));

describe('LoginPage', () => {
  it('renders login UI', () => {
    render(<LoginPage />);
    expect(screen.getByText('Please log in to continue.')).toBeInTheDocument();
  });
});




////////////intregratd test////////////
describe('LoginForm Integration', () => {
  it('renders and submits with correct form data', async () => {
    const user = userEvent.setup();

    const action = jest.fn((formData: FormData) => {
      const email = formData.get('email');
      const password = formData.get('password');
      expect(email).toBe('ali.mahammud@cmsfbd.org');
      expect(password).toBe('123456');
    });

    render(
      <LoginForm action={action}>
        <button type="submit">Log In</button>
      </LoginForm>
    );

    // Fill the form
    await user.type(screen.getByLabelText(/email/i), 'ali.mahammud@cmsfbd.org');
    await user.type(screen.getByLabelText(/password/i), '123456');

    // Submit the form
    await user.click(screen.getByRole('button', { name: /log in/i }));

    // Assert the action function was called
    expect(action).toHaveBeenCalledTimes(1);
  });
});