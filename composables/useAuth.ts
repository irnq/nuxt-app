import { ISession } from '~~/types/ISession';
import { IUser } from '~/types/IUser';
import { Ref } from 'vue';

export const useAuthCookie = () => useCookie('auth_token');

export async function useUser(): Promise<IUser> {
  const authCookie = useAuthCookie().value;
  const user = useState<IUser>('user');

  if (authCookie && !user.value) {
    const { data } = await useFetch('/api/auth/getByAuthToken', {
      headers: useRequestHeaders(['cookie']),
    });
    const currentUser = data.value as IUser;
    user.value = currentUser;
  }

  return user.value;
}

export async function userLogout() {
  await useFetch('api/auth/logout');
  useState('user').value = null;
  await useRouter().push('/');
}

export async function register(userData: IUser) {
  try {
    const { data, error } = await useFetch<ISession>('/api/auth/register', {
      method: 'POST',
      body: { data: userData },
    });

    if (error.value) {
      type ErrorData = {
        data: ErrorData;
      };

      const errorData = error.value as unknown as ErrorData;
      const errors = errorData.data.data as unknown as string;
      const res = JSON.parse(errors);
      const errorMap = new Map(Object.entries(res));

      return { hasErrors: true, error: errorMap };
    }

    if (data) {
      useState('user').value = data;
      await useRouter().push('/main');
    }
  } catch (e) {
    console.log(`error: ${e}`);
  }
}

export async function login(login: string, password: string) {
  const user = await $fetch<IUser>('/api/auth/login', {
    method: 'POST',
    body: {
      login,
      password,
    },
  });
  useState('user').value = user;
  await useRouter().push('/main');
}
